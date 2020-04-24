class Chronometer{
	constructor(element){
		this.element = element;
		this.timer;
		this.time;
		this.hour = 0;
		this.minute = 0;
		this.second = 0;
		this.value = "00:00:00";
	}

	start(){
		let _this = this;

		this.timer = window.setInterval(function(){
			if (_this.second == 60) { 
				_this.minute++; 
				_this.second = 0; 
			}
			if (_this.minute == 60) { 
				_this.hour++; 
				_this.second = 0; 
				_this.minute = 0; 
			}

			let hour = _this.hour;

			if( hour < 10 ){
				hour = `0${hour}`;
			}

			let minute = _this.minute;

			if( minute < 10 ){
				minute = `0${minute}`;
			}

			let second = _this.second;

			if( second < 10 ){
				second = `0${second}`;
			}

			if( _this.element !== null ){
				_this.element.innerHTML = `${hour}:${minute}:${second}`;
			}

			_this.second++;
		}, 1000, _this);
	}

	pause(){
		clearInterval(this.timer);
	}

	resume(){
		this.start();
	}

	restart(){
		this.pause();
		this.hour = 0;
		this.minute = 0;
		this.second = 0;
		if( this.element !== null ){
			this.element.innerHTML = `00:00:00`;
		}
		this.start();
	}
}