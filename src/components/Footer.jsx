export const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open until {closeHour}:00. Come visit us or order online.
          </p>
        </div>
      )}
        
    </footer>
  )
}









{/* {new Date().toLocaleTimeString() `. We're currently open`}     */}
