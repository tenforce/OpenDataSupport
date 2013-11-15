#!/bin/bash

## configuration
VIRTUSER="dba" # virtuoso username
VIRTPASS="dba" # virtuoso password 
BACKUPDIR="/usr/share/virtuoso-opensource/backup" # make sure this is in DirsAllowed in virtuoso.ini 
DAYS=14 # files older then x days will be removed from the backup dir

## functions
function createbackup {
	ISQL=`which isql-vt || which isql`
	BACKUPDATE=`date +%y%m%d-%H%M`
  	$ISQL -U $VIRTUSER -P $VIRTPASS <<ScriptDelimit
		backup_context_clear();
		checkpoint;
		backup_online('virt_backup_$BACKUPDATE#',150,0,vector('$BACKUPDIR'));
		exit;
ScriptDelimit
}

## program
mkdir -p $BACKUPDIR
createbackup
find $BACKUPDIR -mtime +$DAYS -print0 | xargs -0 rm 2> /dev/null
