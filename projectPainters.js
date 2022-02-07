const primaryNav = document.querySelector('.navlinks')
const navToggle = document.querySelector('.mobile-nav-toggle')

	navToggle.addEventListener('click',()=>{
		const visibility = primaryNav.getAttribute('data-visible');

		// console.log(visibility)

		if(visibility === 'false'){
			primaryNav.setAttribute('data-visible', true)
			navToggle.setAttribute('aria-expanded', true)
		console.log("now toggled")

		}else if(visibility === 'true'){
			primaryNav.setAttribute('data-visible', false)
			navToggle.setAttribute('aria-expanded', false)

		console.log("now not toggled")

		}

	})

	window.onscroll = scrollFunction;

	function scrollFunction() {

	  let mybutton = document.getElementById("top")

	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    mybutton.style.display = "flex";
	  } else {
	    mybutton.style.display = "none";
	  }

	}


	// --------------
	// const handleDelete = (target)=>{
	// 	setAllTasks((prev)=>(prev.filter((task)=>(task.id !== target))))
	// }

	// const fruits = [lemons,bananas,strawberries,pawpaw,apple,kiwi,melon]

	// fruits.map((fruit,index)=>(
	// 		<ul>
	// 			<li id={index}>
	// 				{fruit}
	// 			<li/>
	// 		<ul/>
	// 	))

	// const handleAdd = ()=>{
	// 	setItem((prev)=>{item:name, ...prev})
	// }