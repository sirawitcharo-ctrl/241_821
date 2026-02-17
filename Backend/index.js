const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000
app.use(bodyParser.text());
let users = []
let counter = 1;

//path GET / users
app.get('/users', (req, res) => {
    res.json(users);
});
//path GET / test
app.get('/test', (req, res) => {
    let user = {
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    }
    res.json(user)
});

//path POST /user
app.post('/user', (req, res) => {
    let user = req.body;
    user.id = counter;
    counter+= 1;
    users.push(user);
    res.json({
        message: 'User added successfully',
        user: user });
})
//path put /user/:id
app.put('/user/:id', (req, res) => {
    let id = req.params.id;
    //user จาก id ที่ส่งมา
    let seletedIndex = users.findIndex(user => user.id == id);
    
    //อัพเดตข้อมูล user
    if (updatedUser.name) {
        users[seletedIndex].name = updatedUser.name;
    }
    if (updatedUser.email) {
        users[seletedIndex].email = updatedUser.email;
    }

    //เอาข้อมูลที่ update ส่ง response กลับไป
    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: seletedIndex
        }
     });
})

//pate delete /user/:id
app.delete('/user/:id', (req, res) => {
    let id = req.params.id;

    // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let seletedIndex = users.findIndex(user => user.id == id);

    //ลบ user ออกจาก array โดยใช้ delete
    delete users[seletedIndex];
    res.json({
        message: 'User deleted successfully',
            indexDeleted: seletedIndex
     });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});


