
let textBox = document.querySelector('input');
let ul = document.querySelector('ul');
let add_button = document.querySelector('.add_btn');

let list = {
    items: [],
    add: function(text) {
        this.items.push(
            {
                content: text, 
                complete: false
            }
        );        

        console.log(this.items);
        let newLI = document.createElement('li');
        newLI.textContent = text;
        let newLiChild = document.createElement('span');
        newLiChild.textContent = ' x ';
        newLI.appendChild(newLiChild);
        ul.appendChild(newLI);
        textBox.value = '';
    },
    delete: function(text) {
        let itemIndex = this.items.indexOf(this.items.find(function(item){
            return item.content === text;
        }));
        this.items.splice(itemIndex, 1);
        console.log(this.items);
        // ul.children[itemIndex].style.textDecoration = "line-through";
        // console.log(itemIndex);
        // ul.children[itemIndex].remove();
    },
    setComplete: function(text){
        let item = this.items.find(function(item){
            return item.content === text;
        });
        item.complete = !item.complete;
        console.log(item);
    }
}

// list.add("Clean the House");
// list.add("Walk the dog");
// list.add("Take out the trash");

// list.delete("Walk the dog");
// list.setComplete("Clean the House");
// console.log(list.items);

add_button.addEventListener('click', function(event){
    list.add(textBox.value);
})

// ul.addEventListener('click', function(event){
//     list.delete(event.target.textContent);
// })