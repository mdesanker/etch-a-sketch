Etch-A-Sketch web app

Designed an etch-a-sketch in JavaScript as part of The Odin Project. Challenging but fun and rewarding project!

1) Creating the grid - took a good amount of googling. Took a bit of converting old JS syntax into modern. I read that querySelector is not supported in some browsers, while getElementById is more widely supported, but I am not sure whether this is outdated at this point. Example I drew from added n "grid squares" to a row, then repeated for the n rows of the grid. By setting width and height limits on the grid container, I could make sure that the grid didn't change size as the resolution was changed.

2) Creating the color change on mouseover - achieved by creating a nodelist of each "grid item" and adding an eventListener to which changed the background-color css for that item. This was placed into a function which takes the desired color as an argument. For eraser mode, the color passed to the function was white.

3) Clear screen - used button click eventListener to change each grid item to background color white.

4) Rainbow mode - generate random color with each individual mouseover event. Random color generated by using Math.random and Math.round to generate three random whole numbers between 1 and 255, which were then combined to create a rgb value.

5) Changing canvas size - used a range slider to change canvas resolution from 1 x 1 to 64 x 64. Initially I had some problems with the higher resolutions taking a long time to load and not allowing me to draw on portions of the grid. Eventually I realized that the JavaScript was creating new grids on top of each other, which was using a lot of resources especially at high resolutions when the range sider was dragged and not just clicked into a new position. Created a removeGrid function which would remove old grid items when the canvas size was changed. This removed the lag associated with using higher resolutions and solved problems with drawing on the canvas. Dragging the slider at high resolutions is still a little slow because the removeGrid doesn't get called until after the mouse is released.

Overall, really enjoyed working on this.