// Multiple Animated Circle - Get Canvas element by Id
var canvas4 = document.getElementById( "canvas4" );

// Set Canvas dimensions
// canvas4.width   = 300;
// canvas4.height  = 300;
canvas4.width = window.outerWidth;
canvas4.height = window.outerHeight;
// canvas4.height = document.getElementById("block-one");

// Get drawing context
var c4 = canvas4.getContext( '2d' );

// The Circle class
function Circle( x, y, dx, dy, radius ) {

	this.x 	= x;
	this.y 	= y;
	this.dx = dx;
	this.dy = dy;

	this.radius = radius;

	this.draw = function() {

		c4.beginPath();

		c4.arc( this.x, this.y,  this.radius, 0, Math.PI * 2, false  );

        // c4.strokeStyle = "#ED008C";
        c4.fillStyle = "pink";
        			
        // c4.stroke();
        // c4.fill();
        
        // var grd = c4.createRadialGradient(100, 600, 250, 900, 300, 200);
        // grd.addColorStop(0.1, "#D91858");
        // grd.addColorStop(0.5, "#E57505");
        // grd.addColorStop(0.8, "#FFF192");
        // grd.addColorStop(1, "#FFD400");

        // Fill with gradient
        // c4.fillStyle = grd;
        

        // c4.fillStyle = linearGradient1;
        c4.fill();
	}

	this.update = function() {

		if( this.x + this.radius > canvas4.width || this.x - this.radius < 0 ) {

			this.dx = -this.dx;
		}

		if( this.y + this.radius > canvas4.height || this.y - this.radius < 0 ) {

			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}
}

var circles = [];

// Radius
//var radius = 50;

//var radius = Math.random() * (60 - 10) + 10;

for( var i = 0; i < 28; i++ )  {
    
    // Starting Position
    var radius = Math.random() * (60 - 10) + 10;
	var x = Math.random() * ( canvas4.width - radius * 2 ) + radius;
	var y = Math.random() * ( canvas4.height - radius * 2) + radius;

	// Speed in x and y direction
  	var dx = ( Math.random() - 1 ) * 2;
  	var dy = ( Math.random() - 1 ) * 2;

    circles.push( new Circle( x, y, dx, dy, radius ) );
    
    
}

function animate4() {
  
	requestAnimationFrame( animate4 );

	c4.clearRect( 0, 0, canvas4.width, canvas4.height );

	for( var r = 0; r < 28; r++ ) {

		circles[ r ].update();
    }

}

animate4();