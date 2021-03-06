import React from 'react';

function Location() {
	return (
		<div className='Reception-container'>
			<div className='Reception-location'>
				<div className='Reception-text'>
					<h4>Ceremony &amp; Reception</h4>
					<h5>Wedgewood La Verne</h5>
					<p>Time: TBA</p>
					<p>6300 Country Club Drive</p>
					<p>La Verne, Ca 91750</p>
					<a href='https://maps.apple.com/?address=6300%20Country%20Club%20Dr,%20La%20Verne,%20CA%20%2091750,%20United%20States'>
						Click for Directions
					</a>
				</div>
				<iframe
					title='Reception Location'
					src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13209.24886026702!2d-117.7679308!3d34.1383536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe452ea9c719ae746!2sSierra%20La%20Verne%20Wedgewood%20Weddings!5e0!3m2!1sen!2sus!4v1581910801052!5m2!1sen!2sus'
				/>
			</div>
		</div>
	);
}

export default Location;
