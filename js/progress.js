import { guest } from './guest.js';

export const progress = (() => {

    let info = null;
    let bar = null;

    let total = 0;
    let loaded = 0;
    let valid = true;
    let push = true;

    const onComplete = () => {
        guest.name();
    };

    const add = () => {
        if (!push) {
            return;
        }

        total += 1;
    };

    const complete = (type) => {
        if (!valid) {
            
            return;
        }
    
        loaded += 1;
        if (loaded === total) {
            

            // Hide the progress bar and info
            bar.style.display = 'none';
            info.style.display = 'none';
    
            // Hide the entire loading page
            const loadingPage = document.getElementById('loading');
            loadingPage.style.display = 'none';
            
            // Call the onComplete function
            onComplete();
        }
    };
    

    const invalid = (type) => {
        // info.innerText = `Error loading ${type} (${loaded}/${total}) [${parseInt((loaded / total) * 100).toFixed(0)}%]`;
        // bar.style.backgroundColor = 'red';
        // valid = false;
    };

    const run = async () => {
        document.querySelectorAll('img').forEach((asset) => {
            asset.onerror = () => {
                invalid('image');
            };
            asset.onload = () => {
                complete('image');
            };

            if (asset.complete && asset.naturalWidth !== 0 && asset.naturalHeight !== 0) {
                complete('image');
            } else if (asset.complete) {
                invalid('image');
            }
        });
    };

    const init = () => {
        document.querySelectorAll('img').forEach(add);
    
        info = document.getElementById('progress-info');
        bar = document.getElementById('progress-bar');
        // info.style.display = 'block';
    
        // Make sure the loading page is visible at the start
        const loadingPage = document.getElementById('loading');
        // loadingPage.style.display = 'flex'; // Ensure it's visible when starting
    
        push = false;
        run();
    };
    

    return {
        init,
        add,
        invalid,
        complete,
    };
})();