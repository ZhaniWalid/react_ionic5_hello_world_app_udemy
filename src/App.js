// 'useState' => Allows us to manage 'State & Functional Components'
import React, { useState } from 'react';
//-- Use this cmd: 'npm install ionicons' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
// 'play' => is an icon from ' https://ionicons.com/ ' => Website specified for icons only for IONIC FRAMEWORK
import { play as playIcon } from 'ionicons/icons';
// Use this cmd: 'npm install @ionic/react' in the 'Integrated Terminal of VS CODE' or 'Terminal of Windows' to install it
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";

function App() {
  // 'useState' => Allows us to manage 'State & Functional Components'
  const [showToast, setShowToast] = useState(false); // initial value = 'false'
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500); // 1500ms = 1.5s
  };

  /*--- This bloc of 'ReactJS' & 'HTML#5' code will be replaced with a full 'Ionic' code below ---*/
  // return (
  //   <div>
  //     <header>
  //       <h1>My App</h1>
  //     </header>
  //     <main>
  //       <IonButton onClick={handleClick} /* color="warning" */ >
  //         {/* <IonIcon /> => To use icons 
  //                 slot="start" => To make spacing between the 'icon' before the 'text' of the button
  //                 slot="end" => To make spacing between the 'icon' after the 'text' of the button  */} 
  //         <IonIcon icon={playIcon} slot="start"/>
  //         Click Me Bitch
  //       </IonButton>

  //       {/* <IonToast /> => is the same on ' Android with Java => toast.makeText("X") '
  //           'isOpen' => to tell if the 'toast' is visible OR NOT
  //           'showToast' => from 'const [showToast...] = useState(..) 
  //           NB: when inspecting the button with the browser:
  //             if 'device == Android Device' => '<ion-button class="md button... />' 
  //                   => on console tap: 'navigator.userAgent' => 'Mozilla/5.0 (Linux; Android 5.0....)'
  //             if 'device == IOS Device' => '<ion-button class="ios button... />' 
  //                   => on console tap: 'navigator.userAgent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1...)' */}
  //       <IonToast isOpen={showToast} message="Hello World!" />
  //     </main>
  //   </div>
  // );

  // The same code above but with a full 'Ionic' code
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding"> {/* Like the 'className' on a 'ReactJS App' to 'import CSS classes' */}
        <IonButton onClick={handleClick} /* color="warning" */ >
          {/* <IonIcon /> => To use icons 
                  slot="start" => To make spacing between the 'icon' before the 'text' of the button
                  slot="end" => To make spacing between the 'icon' after the 'text' of the button  */} 
          <IonIcon icon={playIcon} slot="start"/>
          Click Me!
        </IonButton>

        {/* <IonToast /> => is the same on ' Android with Java => toast.makeText("X") '
            'isOpen' => to tell if the 'toast' is visible OR NOT
            'showToast' => from 'const [showToast...] = useState(..) 
            NB: when inspecting the button with the browser:
              if 'device == Android Device' => '<ion-button class="md button... />' 
                    => on console tap: 'navigator.userAgent' => 'Mozilla/5.0 (Linux; Android 5.0....)'
              if 'device == IOS Device' => '<ion-button class="ios button... />' 
                    => on console tap: 'navigator.userAgent' => 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1...)' */}
        <IonToast isOpen={showToast} message="Hello World!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
