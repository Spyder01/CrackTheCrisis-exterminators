const fs = require('fs');
const path = require('path')



    const get = ()=>{
        const data = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json'), 'utf8'));
        if(data==null) {
            fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify([]), err=>{
                if(err) throw err;
            })
            return [];
        }
        else return data;
    };
    const write = (entry)=>{
        var data = get ();
        data.push(entry);
        fs.writeFile(path.join(__dirname, './db/db.json'), JSON.stringify(data), err=>{
            if(err) throw err;
        })
    }


module.exports = {get, write};