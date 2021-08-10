
### ACA SE TIENEN QUE DEFINIR LOS ARCHIVOS
permission_file="/Users/diego/diego/dev/keys/thunder-code--key.pem"
server_host="18.219.13.2"
project_path="/Users/diego/diego/git/wip/wip-server"

echo "********************************"
echo "***    Compressing project   ***"
echo "********************************"

cd $project_path
rm -r proj.zip
zip -r  proj.zip ./
clear

echo "********************************"
echo "***  Sending build to server ***"
echo "********************************"

scp -i $permission_file  ./proj.zip   ubuntu@$server_host:/downloads

echo "********************************"
echo "***   Clearing local build   ***"
echo "********************************"

rm ./proj.zip
clear

echo "*************************************"
echo "***   Shutting down node deamon   ***"
echo "*************************************"

ssh -i $permission_file  ubuntu@$server_host sudo systemctl stop wip.service
clear

echo "********************************"
echo "***   Unziping remote file   ***"
echo "********************************"
ssh -i $permission_file  ubuntu@$server_host sudo rm -R /opt/wip/wip-server
ssh -i $permission_file  ubuntu@$server_host sudo unzip /downloads/proj.zip -d /opt/wip/wip-server
# ssh -i $permission_file  ubuntu@$server_host /bin/bash
clear

echo "*************************************"
echo "***   Starting up node deamon   ***"
echo "*************************************"

ssh -i $permission_file  ubuntu@$server_host sudo systemctl start wip.service


read -p "Press enter to continue"
