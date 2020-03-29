#!/bin/sh
# Deprecated warnings popping out for ruby v2.7.
# This egrep removes them
jekyll serve -d /tmp/sl 2>&1 | egrep -v 'deprecated'
