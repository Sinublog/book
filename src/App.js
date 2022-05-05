import React, { useState ,useEffect} from 'react'

const getDatafromLS=()=>{
    const data = localStorage.getItem('forms');
    if(data){
      return JSON.parse(data);
    }
    else{
      return []
    }
  }



 export const App = () => {

     // main arry of object state || forms arry object
     const  [forms,setforms]=useState(getDatafromLS());
    //  input field arry object
     const [name ,setName]=useState('');
     const [email ,setEmail]=useState('');
     const [age ,setAge]=useState('');
     const [phone ,setPhone]=useState('');
     const [adhaar ,setAdhaar]=useState('');
     const [address ,setAddress]=useState('');
     const [date ,setDate]=useState('');
    //  form submit event
     const handleAddFormSubmit=(e)=>{
         e.preventDefault();
         let form={
             name,
             email,
             age,
             phone,
             adhaar,
             address,
             date
         }
         setforms([...forms,form])
         setName('');
         setAddress('')
         setAge('');
         setEmail('');
         setPhone('');
         setDate('');
         setAdhaar('');
     }

     useEffect(()=>{
        localStorage.setItem('forms',JSON.stringify(forms));
      },[forms])
  return (
      
    <div className='wrapper'>
    <h1>VACCINE BOOKING </h1>
    <p>Book here online</p> 
    <div className='main'>
        <form className='form-container' autoComplete='off' 
        onSubmit={handleAddFormSubmit}>
           <input type='text' placeholder='Name' className='form-control' required
               value={name}
               onChange={(e)=>setName(e.target.value)}
               />
           <input type='text' placeholder='Email' className='form-control' required
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
               <input type='text' placeholder='Age' className='form-control' required
               value={age}
               onChange={(e)=>setAge(e.target.value)}
               />
               <input type='text' placeholder='Mob:- XXXXX XXXXX' maxLength='10' className='form-control' required
               value={phone}
               onChange={(e)=>setPhone(e.target.value)}
               />
               <input type='text' placeholder='Adhaar:- XXXX XXXX XXXX' className='form-control' required
               value={adhaar}
               onChange={(e)=>setAdhaar(e.target.value)}
               />
               <input type='text' placeholder='Address' className='form-control' required
               value={address}
               onChange={(e)=>setAddress(e.target.value)}
               />
               <input type='date' className='form-control' required
               value={date}
               onChange={(e)=>setDate(e.target.value)}
                    />
               
           <button type='submit' className='btn btn-success btn-md'>SUBMIT</button>

        </form>
    </div>
    </div>
   
  )
}

export default App
