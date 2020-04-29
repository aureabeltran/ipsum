import React from 'react';

function Loader() {
  return (
    <div class="container">
        <div class="loading-container">
            <div class="loading__blocks">
                <i class="line line--bottom"></i>
                <i class="line line--left"></i>
                <i class="line line--right"></i>
                <i class="line line--roof-left"></i>
                <i class="line line--roof-right"></i>
            </div>
            <span>Ipsum App</span>
        </div>
    
    </div>
  );
}

export default Loader;
