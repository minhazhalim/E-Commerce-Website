export function showToast(operation,id){
     const div = document.createElement('div');
     div.classList.add('toast');
     if(operation === 'add'){
          div.textContent = `Product with ID ${id} has been Added`;
     }else{
          div.textContent = `Product with ID ${id} has been Deleted`;
     }
     document.body.appendChild(div);
     setTimeout(() => {
          div.remove();
     },2000);
};