const Visitor =require("../model/Visitor");

exports.get_visitors = async (req, resizeBy) => {
    Visitor.get_visitors();
    res.render("index");
}