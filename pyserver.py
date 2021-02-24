# pyserver.py
# Created at: Tue Feb 23 2021 16:10:10 GMT+0100 (Central European Standard Time)
# Copyright 2021 MDCarrasco <michaeldanielcarrasco@gmail.com>
#

"""
pyserver.py
INSERT docstring paragraph

Example:
        INSERT example

Todo:
        * INSERT TODO lines
        *

.. _Google Python Style Guide (reference):
http://google.github.io/styleguide/pyguide.html
"""

# Futures

# Generic/Built-in
import os
import sys
from http.server import HTTPServer, CGIHTTPRequestHandler

# Other Libs

# Owned

__author__ = "Michael Carrasco"
__copyright__ = "2021 MDCarrasco <michaeldanielcarrasco@gmail.com>"
__credits__ = ["Michael Carrasco"]
__license__ = ""
__version__ = "0.0.1"
__maintainer__ = "Michael Carrasco"
__email__ = "<michaeldanielcarrasco@gmail.com>"
__status__ = "Dev"

try:
    os.chdir('../site/')
    # Create server object listening the port 5000
    server_object = HTTPServer(server_address=('', 5000),
                               RequestHandlerClass=CGIHTTPRequestHandler)
    # Start the web server
    server_object.serve_forever()
except KeyboardInterrupt:
    sys.exit(0)
