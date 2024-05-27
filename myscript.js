var rollV, nameV, genderV, addressV;

function readFom() {
  UidV = document.getElementById("Uid").value;
  fnameV = document.getElementById("fname").value;
  mnameV = document.getElementById("mname").value;
  snameV = document.getElementById("sname").value;
  EaddV = document.getElementById("Eadd").value;
  addressV = document.getElementById("address").value;
  console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Inserted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snap) {
      document.getElementById("Uid").value = snap.val().Uid;
      document.getElementById("fname").value = snap.val().fname;
      document.getElementById("mname").value = snap.val().mname;
      document.getElementById("sname").value = snap.val().sname;
      document.getElementById("Eadd").value =  snap.val().Eadd;
      document.getElementById("address").value =  snap.val().address;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      //   rollNo: rollV,
      name: nameV,
      gender: genderV,
      address: addressV,
    });
  alert("Data Update");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + rollV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Uid").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("mname").value = "";
  document.getElementById("sname").value = "";
  document.getElementById("Eadd").value = "";
  document.getElementById("address").value = "";
};
