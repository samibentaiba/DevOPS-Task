Vagrant.configure("2") do |config|
  # Specify the box to use
  config.vm.box = "ubuntu/focal64"

  # Provisioning: install required packages
  config.vm.provision "shell", inline: <<-SHELL
    # Update the system and install necessary packages
    sudo apt-get update
    sudo apt-get install -y nodejs npm git mongodb

    # Configure MongoDB
    sudo sed -i '/^bindIp:/c\bindIp: 0.0.0.0' /etc/mongodb.conf
    sudo sed -i '/^port:/c\port: 27017' /etc/mongodb.conf
    sudo mkdir -p /run/mongodb
    sudo chown mongodb:mongodb /run/mongodb

    # Restart MongoDB to apply changes
    sudo systemctl restart mongodb

    # Check if MongoDB is running
    sudo systemctl status mongodb

    # MongoDB Database Initialization
    echo 'use cse_hub_db' | mongo || true
    echo 'db.createCollection("users")' | mongo cse_hub_db || true

    # Start backend server
    cd /vagrant/cse-hub-backend
    nohup npm start &

    # Start frontend server
    cd /vagrant/cse-hub-frontend
    nohup npm run dev &
  SHELL

  # Forward ports to access your app from the host machine
  config.vm.network "forwarded_port", guest: 3000, host: 3000 # React frontend
  config.vm.network "forwarded_port", guest: 5000, host: 5000 # Express backend
  config.vm.network "forwarded_port", guest: 27017, host: 28017 # MongoDB (updated host port)

  # Configure VirtualBox settings
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end
end
