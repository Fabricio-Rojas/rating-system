import { useState } from "react";
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";

function App() {
  const [dialogShow, setDialogShow] = useState(false);

  const handleDialogToggle = () => {
    setDialogShow(!dialogShow);
  }

  const closeDialog = () => {
    setDialogShow(false)
  }

  const randDialog = <dialog open onClick={closeDialog}>
    <img 
      src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmIxMTVmODQ1NmExNDJhNDY0MTY0ZmI3MjBkZWNmYjdiYTBlNjY1YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/fp5QCDii8ytXi/giphy.gif" alt="GIF"
    />
    <p>Click Here to Close</p>
  </dialog>;

  return (
    <main>
      <div className="container">
        <StarRating />
        <Dialog funct={handleDialogToggle} isShowing={dialogShow}/>
      </div>
      {dialogShow && randDialog}
    </main>
  );
}

export default App;
