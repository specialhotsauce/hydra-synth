select = function(arr,l=0){
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
	const blending = (l,i)=> (clamp(l-(i-1),0,1))
	const isFunction = (typeof l === 'function')
	return arr.reduce((prev,curr,i)=>
		prev.blend(curr, isFunction ? ()=>blending(l(),i) : blending(l,i))
	)
}
textures = [noise(), osc(), voronoi(), gradient()]
select(textures,()=>Math.floor(cc[1]))
    .out()

// need to incorporate math and normalization to consider input from knobs (or whatever)
// for switching
