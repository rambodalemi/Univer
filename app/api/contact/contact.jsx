import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export default async function handler(req, res) {
  await dbConnect(); // Connect to MongoDB

  if (req.method === "GET") {
    try {
      const contacts = await Contact.find({}); // Fetch all contacts
      res.status(200).json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Error fetching contacts" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: "Missing contact ID" });
    }

    try {
      const deletedContact = await Contact.findByIdAndDelete(id); // Delete contact by ID

      if (!deletedContact) {
        return res.status(404).json({ message: "Contact not found" });
      }

      res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
      console.error("Error deleting contact:", error);
      res.status(500).json({ message: "Error deleting contact" });
    }
  } else {
    res.setHeader("Allow", ["GET", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
