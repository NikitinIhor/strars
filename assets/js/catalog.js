// button      data-parent=""     ._active
// block       data-block=""      .__box-open

const documentActions = (e) => {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const dataBlockID = targetElement.dataset.parent ? targetElement.dataset.parent : null;
        const datablock = document.querySelector(`[data-block="${dataBlockID}"]`);
        
        if(datablock) {
            const activeButton = document.querySelector('._active');
            const activeBlock = document.querySelector('.__box-open');

            if(activeButton && activeButton !== targetElement) {
                activeButton.classList.remove('_active');
                activeBlock.classList.remove('__box-open');
            }
           
            targetElement.classList.toggle('_active');
            datablock.classList.toggle('__box-open');
        } 

        e.preventDefault();
        
    }
}

document.addEventListener('click', documentActions)