import mongoose from "mongoose";

const folderSchema = new mongoose.Schema({
  title: { type: String },
  url: { type: String },
  shortUrl: { type: String },
});

const FolderModel = mongoose.models["Folder"] || mongoose.model("Folder", folderSchema);

export default FolderModel;
