import { Content } from "../models/content.model.js";
export function getAllContent(req, res) {
  Content.find().then((result) => {
    res.status(200).json(result);
  });
}

export function getContent(req, res) {
  Content.findById(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch(() => res.status(404).json({ error: "Content not found" }));
}

export function createContent(req, res) {
  const content = new Content(req.body);
  content.save().then((data) => res.status(200).json(data));
}
export function deleteContent(req, res) {
  Content.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Deleted the content successfully"))
    .catch(() => res.status(404).json({ error: "Content not found" }));
}
