

const AddActivityForm = ({handleClose}:any) => {
  return (
<div data-dialog="dialog"className="min-h-screen w-full ">
  <div className=" p-5">
    <h1 className="text-xl font-semibold">Hello there ?, <span className="font-normal">please fill in your activity details </span></h1>
    <form className="mt-6">
      <div className="flex flex justify-between gap-3">
        <span className="w-1/2">
          <label htmlFor="activityname" className="block text-xs font-semibold text-gray-600 uppercase">Activity Name</label>
          <input id="activityname" type="text" name="activityname" placeholder="Boating"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
        <span className="w-1/2">
          <label htmlFor="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Activity Price</label>
        <input id="activityprice" type="number" name="activityprice" placeholder="600"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        </span>
      </div>
      <label htmlFor="activitydescription" className="block text-xs font-semibold mt-5 text-gray-600 uppercase">Activity Description</label>
          <input id="activitydescription"  maxLength={200} type="text" name="activitydescription" placeholder="This is an example activity description."  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          
          <label htmlFor="activityduration" className="block text-xs mt-5 font-semibold text-gray-600 uppercase">Activity Description</label>
          <input id="activityduration"  maxLength={200} type="text" name="activityduration" placeholder="120"  className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
        

      <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
      Add Activity
      </button>
      <button className="mt-10" onClick={handleClose}>close this</button>
     
    </form>
  </div>
</div>
  )
}

export default AddActivityForm