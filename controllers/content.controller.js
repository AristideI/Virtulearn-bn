import Content from "../models/content.model.js";

export async function getAllContent(req, res) {
  try {
    // Content.find().then((result) => {
    //   res.status(200).json(result);
    // });
    const content = await Content.find();
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: "Internal server Error" });
  }
}

export async function getContent(req, res) {
  Content.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ error: "Content not found" }));
}

export async function createContent(req, res) {
  const content = new Content(req.body);
  content.save().then((data) => res.status(200).json(data));
}
export async function deleteContent(req, res) {
  Content.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Deleted the content successfully"))
    .catch(() => res.status(404).json({ error: "Content not found" }));
}
