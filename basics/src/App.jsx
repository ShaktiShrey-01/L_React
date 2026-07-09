function App(){
  return (<div className=" p-10 gap-4 flex items-center justify-center w-screen h-screen bg-gray-200">
    <div className=" flex items-center justify-center w-96 h-96 bg-green-500  border-8 border-dashed border-yellow-300 rounded-md shadow-md">
      <div className="flex flex-col items-center gap-4">
      <img src="https://images.unsplash.com/photo-1682685790910-1f3e7c8d5b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZmllJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" alt="selfie" className=" -translate-y-4 object-cover w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"/>
      <h1 className="  font-serif font-extrabold italic text-xl text-center text-blue-600 underline">
        hello
      </h1>
      <button className="text-md font-bold text-white  flex items-center justify-center cursor-pointer bg-red-500 border-4 border-slate-800 rounded-md p-4 transition-transform hover:scale-110 w-32 h-8 ">hello</button>
      </div>
    </div>
    <div className="bg-red-400 w-96 h-96 border-4 border-red-500 rounded-md"></div>
    
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div class="bg-white p-6 shadow rounded-xl border border-slate-200">Card 1</div>
  <div class="bg-white p-6 shadow rounded-xl border border-slate-200">Card 2</div>
  <div class="bg-white p-6 shadow rounded-xl border border-slate-200">Card 3</div>
</div>
    </div>
  );
}
export default App;