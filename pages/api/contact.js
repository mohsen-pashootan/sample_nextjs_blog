import { connectDatabase, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !emailChars(email) ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid inputs" });
      // client.close();
      return;
    }

    let client;

    try {
      const client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }
    //store
    const newMessage = {
      email,
      name,
      message,
    };

    let result;
    try {
      result = await insertDocument(client, "contact", newMessage);
      newComment._id = result.insertedId;
      res.status(201).json({ message: "Comment added!", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "inserting comment failed!" });
    }

    res
      .status(201)
      .json({ message: "Successfully stored message!", message: newMessage });
  }
}

export default handler;
