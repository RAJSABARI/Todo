app.post("/create-item", function(req, res) {

    db.collection("items").insertOne({ text: req.body.item }, function() {
        res.redirect('/')
    })

})
app.post('/update-item', function(req, res) {
    db.collection("items").findOneAndUpdate({ _id: new mongodb.ObjectId(req.body.id) }, { $set: { text: req.body.text } }, function() {

    })
})
app.post('/delete-item', function(req, res) {
    db.collection('items').deleteOne({ _id: new mongodb.ObjectId(req.body.id) }, function() {

        res.send("Data Deleted")
    })
})