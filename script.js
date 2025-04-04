    let mybtn = document.getElementById("btn");
	let div = document.getElementById("output");
    
    
	mybtn.addEventListener("click",()=>{
        let num = document.getElementById("ip").value;
        num = Number(num);
        // console.log(num,typeof num);

	   let pr = new Promise((resolve,reject)=>{
		   setTimeout(()=>{
			   resolve(Number(num));
		   },2000);
	   })

    //    console.log(pr);

	   pr
		.then((value)=>{
			div.textContent = `Result: ${value}`;
            // console.log(pr);
			return value;
		})
		.then((value1)=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					value1 = value1*2;
					div.textContent = `Result: ${value1}`;
					resolve(value1);
				},1000)
			})
		})
		.then((value2)=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					value2 = value2-3;
					div.textContent = `Result: ${value2}`;
					resolve(value2);
				},1000)
			})
		})
		.then((value3)=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					value3 = value3/2;
					div.textContent = `Result: ${value3}`;
					resolve(value3);
				},1000)
			})		
		})
		.then((value4)=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					value4 = value4+10;
					div.textContent = `Result: ${value4}`;
					resolve(value4);
				},1000)
			})
		})
	})