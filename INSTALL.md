# Introduction
This document specifies instructions to install the Open Data Interopability Platform on a machine running CENTOS 6.

# System Requirements
* 64bit GNU/Linux Server (Installation instructions assume CentOS/Redhat compatible
* 2GB RAM minimum, +6 GB are recommended.
* LODMS web application needs a Servlet Container like Apache Tomcat.

# Required Software
## Java 7 
It is recommended to use java 7 from oracle, though odip may also work with open source java implementations. The following instructions will download and install java7 by oracle.

    $ wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F" http://download.oracle.com/otn-pub/java/jdk/7u17-b02/jdk-7u17-linux-x64.rpm
    $ mv jdk-7u17-linux-x64.rpm* jdk-7u17-linux-x64.rpm
    $ sudo yum install jdk-7u17-linux-x64.rpm
    $ sudo alternatives --install /usr/bin/java javac /usr/java/latest/bin/java 20000
    $ sudo alternatives --install /usr/bin/java java /usr/java/latest/bin/java 20000

## Virtuoso
Virtuoso is used as the RDF store of ODIP. A RPM has been created and is available in this repository for your convenience. You can also [install virtuoso from source](http://virtuoso.openlinksw.com/dataspace/doc/dav/wiki/Main/VOSCentosNotes).

### Install virtuoso
Get the package from the repository and install it.

    $ wget 
    $ sudo yum install virtuoso.rpm

Make sure to start the service and to add it to the default runlevels

    $ service virtuoso start
    $ chkconfig --level 345 virtuoso on

## Apache
Apache is used to serve the frontend and to proxy requests to tomcat and virtuoso.

    $ yum install  http

Make sure to start the service and to add it to the default runleves

    $ service httpd start
    $ chkconfig --level 345 httpd on

# Optional Software
## Add RPMForge repository
The RPMForge provides most of the optional software listed here. See http://wiki.centos.org/AdditionalResources/Repositories/RPMForge for detailed instructions

    $ rpm --import http://apt.sw.be/RPM-GPG-KEY.dag.txt
    $ wget http://packages.sw.be/rpmforge-release/rpmforge-release-0.5.2-2.el6.rf.x86_64.rpm
    $ rpm -K rpmforge-release-0.5.2-2.el6.rf.*.rpm
    $ rpm -i rpmforge-release-0.5.2-2.el6.rf.*.rpm

## ModProxyPerlHtml
A Apache module written in perl that rewrites proxied html. It is used to rewrite (local) urls returned by virtuoso's faceted browser to the domain used configured in apache.
    $ yum install perl-Apache2-ModProxyPerlHtml

# Configuration
## Setting up Apache as a proxy
You can set up apache to handle multiple domains and proxy requests to the right application server. We will create a setup that proxies requests to odip.opendatasupport.eu to our tomcat application and data.opendatasupport.eu to our sparql endpoint.

### Allow apache to connect to other services

    $ setsebool httpd_can_network_connect on

### Add configuration to proxy requests to ODIP
 /etc/httpd/conf.d/odip.opendatasupport.eu.conf

    <VirtualHost *:80>
        ServerName odip.opendatasupport.eu
        ProxyPassMatch ^/.*\.xml$ !
        ProxyPass /  http://localhost:8080/lodms
        DocumentRoot /var/www/odip.opendatasupport.eu
        ErrorLog /var/log/httpd/odip.error_log
        <Directory /var/www/odip.opendatasupport.eu>
                AuthUserFile /var/www/odip.opendatasupport.eu/.htpasswd
                AuthType Basic
                AuthName "Please login to use lodms"
                Require valid-user
        </Directory>
    </VirtualHost>

### Add configuration to proxy requests to virtuoso
 /etc/httpd/conf.d/data.opendatasupport.eu.conf

    <VirtualHost *:80>
        ServerName data.opendatasupport.eu
        ProxyPass /fct/rdfdesc/ods-custom.css !
        ProxyPass /fct http://localhost:8890/fct
        ProxyPass /id/catalog http://localhost:8890/id/catalog
        ProxyPass /describe http://localhost:8890/describe
        ProxyPass /data http://localhost:8890/data
        ProxyPass /conductor http://localhost:8890/conductor
        ProxyPass /sparql http://localhost:8890/sparql
        PerlInputFilterHandler Apache2::ModProxyPerlHtml
        PerlOutputFilterHandler Apache2::ModProxyPerlHtml
        SetHandler perl-script
        PerlAddVar ProxyHTMLURLMap "http://localhost:8890/ http://data.opendatasupport.eu/"
        DocumentRoot /var/www/data.opendatasupport.eu
        ErrorLog /var/log/httpd/data.error_log
    </VirtualHost>
