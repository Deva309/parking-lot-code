let parking_lot = (function () {
  let parkingSize = 0,
    parkingArray = [],
    emptySlots = [];
  const createParkinglotSize = (n) => {
    parkingSize = n;
    console.warn("Created parking lot with " + n + " slots");
  };

  const calculateCharge = (parkedTime) => {
    let totalCharges = 0;
    if (parkedTime < 3) {
      totalCharges = 10;
    } else {
      totalCharges = 10 + (parkedTime - 2) * 10;
    }
    return totalCharges;
  };

  const parkVehicle = (vehicleNumber) => {
    if (parkingArray.includes(vehicleNumber)) {
      console.log("Sorry, Duplicate Entry");
    } else {
      if (emptySlots.length) {
        const slotNumber = emptySlots[0];
        parkingArray[slotNumber - 1] = vehicleNumber;
        emptySlots.shift();
        console.log("Allocated slot number: " + slotNumber);
      } else {
        if (parkingArray.length < parkingSize) {
          parkingArray.push(vehicleNumber);
          console.log("Allocated slot number: " + parkingArray.length);
        } else {
          console.log("Sorry, parking lot is full");
        }
      }
    }
  };

  const leaveVehicle = (vehicleNumber, parkedTime) => {
    if (parkingArray.includes(vehicleNumber)) {
      let arrayindex = parkingArray.indexOf(vehicleNumber);
      emptySlots.push(arrayindex + 1);
      emptySlots.sort();
      parkingArray[arrayindex] = null;
      console.log(
        "Registration number " +
          vehicleNumber +
          " with Slot Number " +
          (arrayindex + 1) +
          " is free with Charge " +
          calculateCharge(parkedTime)
      );
    } else {
      console.log("Registration number " + vehicleNumber + " not found");
    }
  };

  const parkingStatus = () => {
    console.log("Slot No.     Registration No.");
    parkingArray.forEach((item, index) => {
      if (item) console.log(index + 1 + "     " + item);
    });
  };
  return { createParkinglotSize, parkVehicle, leaveVehicle, parkingStatus };
})();

parking_lot.createParkinglotSize(6);
parking_lot.parkVehicle("KA-01-HH-1234");
parking_lot.parkVehicle("KA-01-HH-9999");
parking_lot.parkVehicle("KA-01-BB-0001");
parking_lot.parkVehicle("KA-01-HH-7777");
parking_lot.parkVehicle("KA-01-HH-2701");
parking_lot.parkVehicle("KA-01-HH-3141");
parking_lot.leaveVehicle("KA-01-HH-3141", 4);
parking_lot.parkingStatus();
parking_lot.parkVehicle("KA-01-P-333");
parking_lot.parkVehicle("DL-12-AA-9999");
parking_lot.leaveVehicle("KA-01-HH-1234", 4);
parking_lot.leaveVehicle("KA-01-BB-0001", 6);
parking_lot.leaveVehicle("DL-12-AA-9999", 2);
parking_lot.parkVehicle("KA-09-HH-0987");
parking_lot.parkVehicle("CA-09-IO-1111");
parking_lot.parkVehicle("KA-09-HH-0123");
parking_lot.parkingStatus();
