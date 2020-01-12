let buttons = {
    name : 'google',
    link : 'http://google.com'
};

const linking = document.getElementById('linking');
linking.innerText = buttons.name;
Console.dir (linking)
linking.href = buttons.link;