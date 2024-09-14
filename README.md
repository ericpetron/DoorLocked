# DoorLocked

![1726273540844](images/README/1726273540844.png)

Using the GPIO on a Raspberry Pi to complete a circuit, a simple web server determines if a door is locked or not

## Important

Raspberry Pi GPIO is only supported on Node 16. Make sure you have a version of Node 16 installed.

## PI Setup

I used a Pi 3B+ for this project. The GPIO pin used is pin 2. Refer to the manual to find out where it is. Attach a wire connected to **pin 2** to the top of your lock. Then attach a wire connected to ground to the bottom of the lock. This should be set up in a way that when the door is locked, the circuit is complete. When unlocked, the circuit should be incomplete. Once set up follow the installation.

## Installation

1. Clone this repository.

   ```bash
   git clone https://github.com/ericpetron/DoorLocked.git
   ```
2. Download the nessessary packages.

   ```bash
   npm install
   ```
3. Run the server! In order to use GPIO, sudo is required.

   ```bash
   npm start
   ```
