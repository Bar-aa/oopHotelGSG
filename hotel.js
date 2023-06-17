class Room {
    floorNum;
    roomNum;
    price;
    #isBooked;
    constructor(floorNum, roomNum, price,value) {
        this.floorNum = floorNum;
        this.roomNum = roomNum;
        this.price = price;
        this.#isBooked=value;
    }
    printRoom(){
        if (this.#isBooked){
            console.log(`Room ${this.roomNum} on floor ${this.floorNum} cost ${this.price} Which is  booked.`);
        }
        else {
            console.log(`Room ${this.roomNum} on floor ${this.floorNum} cost ${this.price} Which is not booked.`);
        }
    }
    book(){
        this.#isBooked=true;
    }
    isBooked(){
        return this.#isBooked;
    }
} 

class  RoomWithView extends Room {
    view;
    NumberOfBeds;
    constructor(floorNum, roomNum, price,value, view,numberOfBeds) {
        super(floorNum, roomNum, price,value);
        this.view = view;
        this.numberOfBeds = numberOfBeds
    }
    printRoom(){
        if (this.isBooked()){
            console.log(`Room ${this.roomNum} on floor ${this.floorNum} cost ${this.price}  also the number of Beds is ${this.numberOfBeds} and have view ${this.view} But it's  booked .`);
        }
        else {
            console.log(`Room ${this.roomNum} on floor ${this.floorNum} cost ${this.price} also the number of Beds is ${this.numberOfBeds}  and have view ${this.view} Which is not booked.`);
        }
    }

}
class SleepingRoom extends Room {
    personCapacity;
    constructor(floorNum, roomNum, price,value, personCapacity) {
        super(floorNum, roomNum, price,value);
        this.personCapacity = personCapacity;
    }
    printRoom(){
        if (this.isBooked()){
            console.log(`Room ${this.roomNum} on floor ${this.floorNum} cost ${this.price}  also the person Capacity is ${this.personCapacity}  But it's  booked .`);
        }
        else {
            console.log(`Room ${this.roomNum} on floor ${this.floorNum} cost ${this.price} also the personCapacity is ${this.personCapacity}  Which is not booked.`);
        }
    }
}
class Hotel {
    Address;
    NumberOfRooms;
    #mainFloor;
    #maxFloor;
    rooms;

    constructor(address, numberOfRooms, mainFloor, maxFloor,room) {
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.#mainFloor=mainFloor;
        this.#maxFloor=maxFloor;
        this.rooms = room;
    }
    printAdvertismen() {
        console.log(`Welcome to our hotel at ${this.address}.`);
    }
    listBookedRooms() {
        let bookedRooms = [];
        for (let room of this.rooms) {
            if (room.isBooked()) {
                bookedRooms.push(room);
            }
        }
        return bookedRooms;
    }
    /*get mainFloor() {
        return this.#mainFloor;
    }
    set mainFloor(value) {
        this.#mainFloor = value;
    }
    get maxFloor() {
        return this.#maxFloor;
    }
    set maxFloor(value) {
        this.#maxFloor = value;
    }*/
}

const r1=new Room(1,55,200,false);
const r2=new Room(2,156,300,true);
const r3=new Room(3,257,400,true);
const r4=new Room(4,358,500,false);
const r5=new Room(5,459,600,true);
r1.printRoom();
r2.printRoom();
r3.printRoom();
r4.printRoom();
r5.printRoom();
r1.book();
console.log(r1.isBooked());
console.log(r2.isBooked());
console.log(r3.isBooked());
console.log(r4.isBooked());
console.log(r5.isBooked());
const rv1=new RoomWithView(3,7,220,false,"Garden",3);
const rv2=new RoomWithView(1,7,290,true,"Garden",3);
const rv3=new RoomWithView(2,7,350,false,"see",3);
const rv4=new RoomWithView(9,7,950,true,"Garden",3);
const rv5=new RoomWithView(5,7,270,false,"Garden",3);
rv1.printRoom();
rv2.printRoom();
rv3.printRoom();
rv4.printRoom();
rv5.printRoom();
console.log(rv1.isBooked());
console.log(rv2.isBooked());
console.log(rv3.isBooked());
console.log(rv4.isBooked());
console.log(rv5.isBooked());
const r6=new SleepingRoom(6,7,220,false,3);
const r7=new SleepingRoom(7,7,290,true,4);
const r8=new SleepingRoom(8,7,350,false,5);
const r9=new SleepingRoom(9,7,950,true,10);
const r10=new SleepingRoom(5,7,270,false,8);
r6.printRoom();
r7.printRoom();
r8.printRoom();
r9.printRoom();
r10.printRoom();
console.log(r6.isBooked());
console.log(r7.isBooked());
console.log(r8.isBooked());
console.log(r9.isBooked());
console.log(r10.isBooked());
r10.book();
console.log(r10.isBooked());

const h1=new Hotel("Nablus",10,1,10,[r1,r2,r3,r4,r5,rv5,r10]);
h1.printAdvertismen();
h1.listBookedRooms();
console.log(h1.listBookedRooms());
