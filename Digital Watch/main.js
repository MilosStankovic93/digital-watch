		var gasiPali = false;
		

		//var sati = 0
		
		
		function paliGasi(){
			var Tacka1 = document.querySelector(".t1");
			var Tacka2 = document.querySelector(".t2");
			
			if(!gasiPali){
				gasiPali = setTimeout(() =>{
					Tacka1.classList.add("inactive");
					Tacka2.classList.add("inactive");
					gasiPali = true;

					

					setTimeout(() =>{
						Tacka1.classList.remove("inactive");
						Tacka2.classList.remove("inactive");
						gasiPali = false;
	

					}, 500)

				}, 500)

			}
			
		}


		function gP(){
			setInterval(()=>{
				
 				if(!gasiPali){
					
					paliGasi()
				
				
				}
				else{
					
					return;
				}
			}, 100)
			
		}



		function kolikoJeSati(){
			var d = new Date();
			var sati = d.getHours();
			var minuta = d.getMinutes();
			

			var gasi = document.querySelectorAll(".s1, .s2, .s3, .s4, .s5, .s6, .s7")
			var gasi2 = document.querySelectorAll(".s12, .s22, .s32, .s42, .s52, .s62, .s72");

			for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.remove("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.remove("inactive");
				}

				var mgasi = document.querySelectorAll(".m1, .m2, .m3, .m4, .m5, .m6, .m7");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m32, .m42, .m52, .m62, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.remove("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.remove("inactive");
				}

			if(sati == 0){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s42");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 1){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s12, .s22, .s42, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 2){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s22, .s62");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 3){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s22, .s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 4){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s12, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 5){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s32, .s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 6){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s32");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 7){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s22, .s42, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 8){
				var gasi = document.querySelectorAll(".s4");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				
				
			}

			if(sati == 9){
				var gasi = document.querySelectorAll(".s4");
				var gasi2 = document.querySelectorAll(".s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 10){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s42");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 11){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s12, .s22, .s42, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 12){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s22, .s62");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}


			if(sati == 13){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s22, .s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}
			}

			if(sati == 14){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s12, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 15){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s32, .s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 16){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s32");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 17){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s22, .s42, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 18){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				

			}

			if(sati == 19){
				var gasi = document.querySelectorAll(".s1, .s2, .s4, .s5, .s7");
				var gasi2 = document.querySelectorAll(".s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 20){
				var gasi = document.querySelectorAll(".s2, .s6");
				var gasi2 = document.querySelectorAll(".s42");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 21){
				var gasi = document.querySelectorAll(".s2, .s6");
				var gasi2 = document.querySelectorAll(".s12, .s22, .s42, .s52, .s72");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 22){
				var gasi = document.querySelectorAll(".s2, .s6");
				var gasi2 = document.querySelectorAll(".s22, .s62");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}

			}

			if(sati == 23){
				var gasi = document.querySelectorAll(".s2, .s6");
				var gasi2 = document.querySelectorAll(".s22, .s52");

				for(var i = 0; i<gasi.length; i++){
					gasi[i].classList.add("inactive");
				}
				for(var j = 0; j<gasi2.length; j++){
					gasi2[j].classList.add("inactive");
				}


			}






			if(minuta == 0){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m42");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 1){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 2){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m22, .m62");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 3){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m22, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 4){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m12, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 5){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m32, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 6){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m32");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 7){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 8){
				var mgasi = document.querySelectorAll(".m4");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				
				
			}



			if(minuta == 9){
				var mgasi = document.querySelectorAll(".m4");
				var mgasi2 = document.querySelectorAll(".m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}

			if(minuta == 10){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m42");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 11){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 12){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m22, .m62");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 13){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m22, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 14){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m12, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 15){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m32, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 16){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m32");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 17){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 18){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}

				
				
			}



			if(minuta == 19){
				var mgasi = document.querySelectorAll(".m1, .m2, .m4, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
				
			}



			if(minuta == 20){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m42");
				
				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				

			}


			if(minuta == 21){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 22){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m22, .m62");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 23){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m22, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 24){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m12, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 25){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m32, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 26){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m32");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 27){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 28){
				var mgasi = document.querySelectorAll(".m2, .m6");
				
				

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				
				
				
			}



			if(minuta == 29){
				var mgasi = document.querySelectorAll(".m2, .m6");
				var mgasi2 = document.querySelectorAll(".m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}

			if(minuta == 30){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m42");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 31){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 32){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m22, .m62");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 33){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m22, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 34){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m12, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 35){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m32, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 36){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m32");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 37){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 38){
				var mgasi = document.querySelectorAll(".m2, .m5");
				
				

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				
				
				
			}



			if(minuta == 39){
				var mgasi = document.querySelectorAll(".m2, .m5");
				var mgasi2 = document.querySelectorAll(".m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 40){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m42");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}



			if(minuta == 41){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 42){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m22, .m62");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 43){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m22, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 44){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m12, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 45){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m32, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 46){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m32");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 47){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 48){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				
				

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				
				
				
			}



			if(minuta == 49){
				var mgasi = document.querySelectorAll(".m1, .m5, .m7");
				var mgasi2 = document.querySelectorAll(".m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}



			if(minuta == 50){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m42");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 51){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m12, .m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
			}


			if(minuta == 52){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m22, .m62");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}

			}


			if(minuta == 53){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m22, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 54){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m12, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 55){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m32, .m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 56){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m32");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 57){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m22, .m42, .m52, .m72");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			if(minuta == 58){
				var mgasi = document.querySelectorAll(".m3, .m5");
				
				

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				
				
				
			}



			if(minuta == 59){
				var mgasi = document.querySelectorAll(".m3, .m5");
				var mgasi2 = document.querySelectorAll(".m52");

				for(var m = 0; m<mgasi.length; m++){
					mgasi[m].classList.add("inactive");
				}
				for(var m2 = 0; m2<mgasi2.length; m2++){
					mgasi2[m2].classList.add("inactive");
				}
				
			}


			
			
		}







		function pozoviSat(){
			setInterval(() => {
				kolikoJeSati()
			}, 1000)
		}


		gP()
		kolikoJeSati()
		pozoviSat()
		

