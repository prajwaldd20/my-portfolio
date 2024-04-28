const Contact =()=>
{
    return (

        <>
        <h1 name="contact"  className="text-3xl font-semibold ml-10 underline mt-2 lg:h-1/5 lg:mt-12 dark:text-gray-50 ">Contact</h1>
        <div className="max-w-lg mx-auto py-8">
    
      <form className="space-y-4 ml-5 p-2"
      action="https://getform.io/f/pboxkqva"
      method="POST"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-50"
          
          >Name</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md border-black " />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-50">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md border-black" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-50">Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md border-black"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Send Message</button>
      </form>
    </div>
        </>
    )
}

export default Contact 