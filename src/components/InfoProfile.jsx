import './InfoProfile.css'

const InfoProfile = ( { userProfile, name } ) => {
  return (
    <div className='profile-container'>
      <section className='profile-picture'>
        <img src={userProfile.foto} alt={name + "'s portrait"} />
      </section>
      <article className='profile-info'>
        <h2>Name: {name}</h2>
        <p>Birthdate: {userProfile.fecha_nacimiento} </p>
        <p>Birthplace: {userProfile.lugar_nacimiento}</p>
        <p>Address: {userProfile.direccion}</p>
        <p>Social Strata: {userProfile.estrato}</p>
        <p>Civil Status: {userProfile.estado_civil}</p>
        <p>Healthcare Provider: {userProfile.eps}</p>
        <button className='profile-edit'>Edit Profile</button>
      </article>
    </div>
  )
}

export default InfoProfile