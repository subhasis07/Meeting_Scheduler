import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    // Check if the logged-in user already exists in our DB
    const loggedInUser = await db?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    // If the user already exists in the DB, return the user
    if (loggedInUser) {
      return loggedInUser;
    }

    // If the user does not exist in the DB, create a new one
    const name = `${user.firstName} ${user.lastName}`;

    // Ensure the username contains only allowed characters
    const sanitizedUsername = name.replace(/[^a-zA-Z0-9_-]/g, '-');

    // Update the Clerk user with a sanitized username
    await clerkClient().users.updateUser(user.id, {
      username: sanitizedUsername+Math.floor(Math.random()*10),
    });

    // Create a new user in the Prisma database
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
        username: sanitizedUsername+Math.floor(Math.random()*10),
      },
    });

    return newUser; // Return the newly created user from your database
  } catch (error) {
    console.error("Error in checkUser function:", error);
  }
};
