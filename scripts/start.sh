PROJECT_NAME="react-framework"
APPLICATIONS="applications"
echo "Welcome to React Framework";
echo "-------------------------------------------------------------"
echo "-------------------------------------------------------------"

echo "Cloning TM React React Framework From Work bitbucket";
if [ -d "$PROJECT_NAME" ]; then
  rm -rf "$PROJECT_NAME"
fi
ssh://git@work.webmascot.com:7999/gd/react-framework.git "$PROJECT_NAME"

cd "$PROJECT_NAME/$APPLICATIONS"

echo "Cloning TM React Project From GitHub";
git clone https://github.com/hmtmcse/tm-react.git 


cd ../..
echo "Installing Dependency";
yarn install