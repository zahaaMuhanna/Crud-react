import React from 'react'

function Share({id,title,type,name,custemClass,value,handleData,errors}) {
  return (
    <div className="mb-3">
            <label htmlFor={id} className="form-label">{title}</label>
            <input type={type} name={name} className={`form-control ${custemClass}`} id={id} onChange={handleData} value={value} />
            {errors[name] && <p className='text-danger'>{errors[name]}</p>}
        </div>
  )
}

export default Share