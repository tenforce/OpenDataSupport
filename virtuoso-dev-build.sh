#!/bin/bash
# centos virtuoso bootstrap 
# based on http://www.openlinksw.com/dataspace/doc/dav/wiki/Main/VOSCentosNotes

BUILD_PATH="virtuoso_build"
VIRT_PREFIX="/opt/virtuoso-dev"

sudo yum install gcc gmake autoconf automake libtool flex \
	bison gperf gawk m4 make openssl-devel readline-devel wget
mkdir -p $BUILD_PATH
wget https://github.com/openlink/virtuoso-opensource/archive/develop/6.tar.gz -O $BUILD_PATH/virtuoso.tar
cd $BUILD_PATH
tar vfx virtuoso.tar
cd virtuoso-opensource-develop-6
./autogen.sh
CFLAGS="-O2 -m64"
export CFLAGS
./configure --prefix=$VIRT_PREFIX
make 
sudo make install
