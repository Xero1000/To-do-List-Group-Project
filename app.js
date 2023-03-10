let textBox = document.querySelector('input');
let ul = document.querySelector('ul');
let add_button = document.querySelector('.add_btn');

let list = {
    items: [], // an array of objects representing each list item containing the item text and a boolean value for if it's complete
    add: function(text) {

        // Create a new list element and give it the text from the input box
        let newLI = document.createElement('li');
        newLI.textContent = text;

        // Create a new child element for the delete (x) button
        let newLiChild = document.createElement('span');
        newLiChild.textContent = ' x ';
        newLiChild.classList.add("delete_btn");

        // delete button is appended to new list item
        // and new list item is appended to the unordered list
        newLI.appendChild(newLiChild);
        ul.appendChild(newLI);

        // object with list item's text and completion status is pushed to 
        // items array
        this.items.push(
            {
                content: newLI.textContent, 
                complete: false
            }
        );        

        textBox.value = '';
        console.log(this.items);
    },
    delete: function(element) {

        // find the index of the object representing the element within the items array
        // and delete the item from both the items array and the unordered list  
        let itemIndex = this.items.indexOf(this.items.find(function(item){
            return item.content === element.textContent;
        }));
        
        this.items.splice(itemIndex, 1);
        ul.children[itemIndex].remove();
        console.log(this.items);
    },
    setComplete: function(element){

        // Get the element's corresponding object within the items array
        // and toggle its completion status 
        let item = this.items.find(function(item){
            return item.content === element.textContent;
        });
        item.complete = !item.complete;
        
        // completed items turn green but the x
        // button remains the same
        // if not completed, the item turns black again
        if (item.complete) {
            element.style.color = 'green';
            element.childNodes[1].style.color = 'black';
        }
        else {
            element.style.color = 'black';
        }
        console.log(this.items);
    }
}

// event listener for add button 
add_button.addEventListener('click', function(event){
    list.add(textBox.value);
})

// event listener for clicking on an item itself
ul.addEventListener('click', function(event){
    
    // if the delete button was clicked, call the list's delete function
    if (event.target.classList.contains("delete_btn")){
        list.delete(event.target.parentElement);
    }

    // if the list item text was clicked, call the list's setComplete function
    else if (event.target.tagName === 'LI'){
        list.setComplete(event.target);
    }
})