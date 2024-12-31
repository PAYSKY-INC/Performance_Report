/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 120.0, "minX": 0.0, "maxY": 918.0, "series": [{"data": [[0.0, 120.0], [0.1, 120.0], [0.2, 120.0], [0.3, 120.0], [0.4, 120.0], [0.5, 120.0], [0.6, 124.0], [0.7, 124.0], [0.8, 124.0], [0.9, 124.0], [1.0, 124.0], [1.1, 125.0], [1.2, 125.0], [1.3, 125.0], [1.4, 125.0], [1.5, 125.0], [1.6, 125.0], [1.7, 125.0], [1.8, 125.0], [1.9, 125.0], [2.0, 125.0], [2.1, 125.0], [2.2, 126.0], [2.3, 126.0], [2.4, 126.0], [2.5, 126.0], [2.6, 126.0], [2.7, 131.0], [2.8, 131.0], [2.9, 131.0], [3.0, 131.0], [3.1, 131.0], [3.2, 131.0], [3.3, 131.0], [3.4, 131.0], [3.5, 131.0], [3.6, 131.0], [3.7, 131.0], [3.8, 131.0], [3.9, 131.0], [4.0, 131.0], [4.1, 131.0], [4.2, 131.0], [4.3, 131.0], [4.4, 133.0], [4.5, 133.0], [4.6, 133.0], [4.7, 133.0], [4.8, 133.0], [4.9, 133.0], [5.0, 133.0], [5.1, 133.0], [5.2, 133.0], [5.3, 133.0], [5.4, 134.0], [5.5, 134.0], [5.6, 134.0], [5.7, 134.0], [5.8, 134.0], [5.9, 134.0], [6.0, 134.0], [6.1, 134.0], [6.2, 134.0], [6.3, 134.0], [6.4, 134.0], [6.5, 136.0], [6.6, 136.0], [6.7, 136.0], [6.8, 136.0], [6.9, 136.0], [7.0, 136.0], [7.1, 136.0], [7.2, 136.0], [7.3, 136.0], [7.4, 136.0], [7.5, 136.0], [7.6, 137.0], [7.7, 137.0], [7.8, 137.0], [7.9, 137.0], [8.0, 137.0], [8.1, 137.0], [8.2, 137.0], [8.3, 137.0], [8.4, 137.0], [8.5, 137.0], [8.6, 137.0], [8.7, 138.0], [8.8, 138.0], [8.9, 138.0], [9.0, 138.0], [9.1, 138.0], [9.2, 139.0], [9.3, 139.0], [9.4, 139.0], [9.5, 139.0], [9.6, 139.0], [9.7, 140.0], [9.8, 140.0], [9.9, 140.0], [10.0, 140.0], [10.1, 140.0], [10.2, 140.0], [10.3, 141.0], [10.4, 141.0], [10.5, 141.0], [10.6, 141.0], [10.7, 141.0], [10.8, 141.0], [10.9, 141.0], [11.0, 141.0], [11.1, 141.0], [11.2, 141.0], [11.3, 141.0], [11.4, 141.0], [11.5, 141.0], [11.6, 141.0], [11.7, 141.0], [11.8, 141.0], [11.9, 142.0], [12.0, 142.0], [12.1, 142.0], [12.2, 142.0], [12.3, 142.0], [12.4, 143.0], [12.5, 143.0], [12.6, 143.0], [12.7, 143.0], [12.8, 143.0], [12.9, 143.0], [13.0, 145.0], [13.1, 145.0], [13.2, 145.0], [13.3, 145.0], [13.4, 145.0], [13.5, 145.0], [13.6, 145.0], [13.7, 145.0], [13.8, 145.0], [13.9, 145.0], [14.0, 145.0], [14.1, 145.0], [14.2, 145.0], [14.3, 145.0], [14.4, 145.0], [14.5, 145.0], [14.6, 146.0], [14.7, 146.0], [14.8, 146.0], [14.9, 146.0], [15.0, 146.0], [15.1, 146.0], [15.2, 146.0], [15.3, 146.0], [15.4, 146.0], [15.5, 146.0], [15.6, 148.0], [15.7, 148.0], [15.8, 148.0], [15.9, 148.0], [16.0, 148.0], [16.1, 148.0], [16.2, 148.0], [16.3, 148.0], [16.4, 148.0], [16.5, 148.0], [16.6, 148.0], [16.7, 148.0], [16.8, 148.0], [16.9, 148.0], [17.0, 148.0], [17.1, 148.0], [17.2, 148.0], [17.3, 149.0], [17.4, 149.0], [17.5, 149.0], [17.6, 149.0], [17.7, 149.0], [17.8, 149.0], [17.9, 149.0], [18.0, 149.0], [18.1, 149.0], [18.2, 149.0], [18.3, 149.0], [18.4, 149.0], [18.5, 149.0], [18.6, 149.0], [18.7, 149.0], [18.8, 149.0], [18.9, 149.0], [19.0, 149.0], [19.1, 149.0], [19.2, 149.0], [19.3, 149.0], [19.4, 149.0], [19.5, 149.0], [19.6, 149.0], [19.7, 149.0], [19.8, 149.0], [19.9, 152.0], [20.0, 152.0], [20.1, 152.0], [20.2, 152.0], [20.3, 152.0], [20.4, 152.0], [20.5, 152.0], [20.6, 152.0], [20.7, 152.0], [20.8, 152.0], [20.9, 152.0], [21.0, 152.0], [21.1, 152.0], [21.2, 152.0], [21.3, 152.0], [21.4, 152.0], [21.5, 152.0], [21.6, 153.0], [21.7, 153.0], [21.8, 153.0], [21.9, 153.0], [22.0, 153.0], [22.1, 153.0], [22.2, 153.0], [22.3, 153.0], [22.4, 153.0], [22.5, 153.0], [22.6, 153.0], [22.7, 153.0], [22.8, 153.0], [22.9, 153.0], [23.0, 153.0], [23.1, 153.0], [23.2, 153.0], [23.3, 153.0], [23.4, 153.0], [23.5, 153.0], [23.6, 153.0], [23.7, 154.0], [23.8, 154.0], [23.9, 154.0], [24.0, 154.0], [24.1, 154.0], [24.2, 154.0], [24.3, 154.0], [24.4, 154.0], [24.5, 154.0], [24.6, 154.0], [24.7, 154.0], [24.8, 154.0], [24.9, 154.0], [25.0, 154.0], [25.1, 154.0], [25.2, 154.0], [25.3, 155.0], [25.4, 155.0], [25.5, 155.0], [25.6, 155.0], [25.7, 155.0], [25.8, 155.0], [25.9, 155.0], [26.0, 155.0], [26.1, 155.0], [26.2, 155.0], [26.3, 155.0], [26.4, 156.0], [26.5, 156.0], [26.6, 156.0], [26.7, 156.0], [26.8, 156.0], [26.9, 156.0], [27.0, 156.0], [27.1, 156.0], [27.2, 156.0], [27.3, 156.0], [27.4, 156.0], [27.5, 156.0], [27.6, 156.0], [27.7, 156.0], [27.8, 156.0], [27.9, 156.0], [28.0, 157.0], [28.1, 157.0], [28.2, 157.0], [28.3, 157.0], [28.4, 157.0], [28.5, 157.0], [28.6, 157.0], [28.7, 157.0], [28.8, 157.0], [28.9, 157.0], [29.0, 157.0], [29.1, 157.0], [29.2, 157.0], [29.3, 157.0], [29.4, 157.0], [29.5, 157.0], [29.6, 159.0], [29.7, 159.0], [29.8, 159.0], [29.9, 159.0], [30.0, 159.0], [30.1, 159.0], [30.2, 159.0], [30.3, 159.0], [30.4, 159.0], [30.5, 159.0], [30.6, 159.0], [30.7, 160.0], [30.8, 160.0], [30.9, 160.0], [31.0, 160.0], [31.1, 160.0], [31.2, 160.0], [31.3, 160.0], [31.4, 160.0], [31.5, 160.0], [31.6, 160.0], [31.7, 160.0], [31.8, 161.0], [31.9, 161.0], [32.0, 161.0], [32.1, 161.0], [32.2, 161.0], [32.3, 161.0], [32.4, 161.0], [32.5, 161.0], [32.6, 161.0], [32.7, 161.0], [32.8, 162.0], [32.9, 162.0], [33.0, 162.0], [33.1, 162.0], [33.2, 162.0], [33.3, 162.0], [33.4, 162.0], [33.5, 162.0], [33.6, 162.0], [33.7, 162.0], [33.8, 162.0], [33.9, 162.0], [34.0, 162.0], [34.1, 162.0], [34.2, 162.0], [34.3, 162.0], [34.4, 162.0], [34.5, 163.0], [34.6, 163.0], [34.7, 163.0], [34.8, 163.0], [34.9, 163.0], [35.0, 163.0], [35.1, 163.0], [35.2, 163.0], [35.3, 163.0], [35.4, 163.0], [35.5, 163.0], [35.6, 163.0], [35.7, 163.0], [35.8, 163.0], [35.9, 163.0], [36.0, 163.0], [36.1, 163.0], [36.2, 163.0], [36.3, 163.0], [36.4, 163.0], [36.5, 163.0], [36.6, 164.0], [36.7, 164.0], [36.8, 164.0], [36.9, 164.0], [37.0, 164.0], [37.1, 164.0], [37.2, 164.0], [37.3, 164.0], [37.4, 164.0], [37.5, 164.0], [37.6, 164.0], [37.7, 164.0], [37.8, 164.0], [37.9, 164.0], [38.0, 164.0], [38.1, 164.0], [38.2, 166.0], [38.3, 166.0], [38.4, 166.0], [38.5, 166.0], [38.6, 166.0], [38.7, 166.0], [38.8, 166.0], [38.9, 166.0], [39.0, 166.0], [39.1, 166.0], [39.2, 166.0], [39.3, 167.0], [39.4, 167.0], [39.5, 167.0], [39.6, 167.0], [39.7, 167.0], [39.8, 168.0], [39.9, 168.0], [40.0, 168.0], [40.1, 168.0], [40.2, 168.0], [40.3, 168.0], [40.4, 169.0], [40.5, 169.0], [40.6, 169.0], [40.7, 169.0], [40.8, 169.0], [40.9, 169.0], [41.0, 169.0], [41.1, 169.0], [41.2, 169.0], [41.3, 169.0], [41.4, 169.0], [41.5, 169.0], [41.6, 169.0], [41.7, 169.0], [41.8, 169.0], [41.9, 169.0], [42.0, 171.0], [42.1, 171.0], [42.2, 171.0], [42.3, 171.0], [42.4, 171.0], [42.5, 172.0], [42.6, 172.0], [42.7, 172.0], [42.8, 172.0], [42.9, 172.0], [43.0, 172.0], [43.1, 172.0], [43.2, 172.0], [43.3, 172.0], [43.4, 172.0], [43.5, 172.0], [43.6, 172.0], [43.7, 172.0], [43.8, 172.0], [43.9, 172.0], [44.0, 172.0], [44.1, 173.0], [44.2, 173.0], [44.3, 173.0], [44.4, 173.0], [44.5, 173.0], [44.6, 173.0], [44.7, 173.0], [44.8, 173.0], [44.9, 173.0], [45.0, 173.0], [45.1, 173.0], [45.2, 174.0], [45.3, 174.0], [45.4, 174.0], [45.5, 174.0], [45.6, 174.0], [45.7, 174.0], [45.8, 174.0], [45.9, 174.0], [46.0, 174.0], [46.1, 174.0], [46.2, 174.0], [46.3, 174.0], [46.4, 174.0], [46.5, 174.0], [46.6, 174.0], [46.7, 174.0], [46.8, 174.0], [46.9, 174.0], [47.0, 174.0], [47.1, 174.0], [47.2, 174.0], [47.3, 174.0], [47.4, 175.0], [47.5, 175.0], [47.6, 175.0], [47.7, 175.0], [47.8, 175.0], [47.9, 175.0], [48.0, 175.0], [48.1, 175.0], [48.2, 175.0], [48.3, 175.0], [48.4, 176.0], [48.5, 176.0], [48.6, 176.0], [48.7, 176.0], [48.8, 176.0], [48.9, 176.0], [49.0, 176.0], [49.1, 176.0], [49.2, 176.0], [49.3, 176.0], [49.4, 176.0], [49.5, 177.0], [49.6, 177.0], [49.7, 177.0], [49.8, 177.0], [49.9, 177.0], [50.0, 177.0], [50.1, 177.0], [50.2, 177.0], [50.3, 177.0], [50.4, 177.0], [50.5, 177.0], [50.6, 177.0], [50.7, 177.0], [50.8, 177.0], [50.9, 177.0], [51.0, 177.0], [51.1, 177.0], [51.2, 177.0], [51.3, 177.0], [51.4, 177.0], [51.5, 177.0], [51.6, 177.0], [51.7, 179.0], [51.8, 179.0], [51.9, 179.0], [52.0, 179.0], [52.1, 179.0], [52.2, 179.0], [52.3, 179.0], [52.4, 179.0], [52.5, 179.0], [52.6, 179.0], [52.7, 180.0], [52.8, 180.0], [52.9, 180.0], [53.0, 180.0], [53.1, 180.0], [53.2, 180.0], [53.3, 182.0], [53.4, 182.0], [53.5, 182.0], [53.6, 182.0], [53.7, 182.0], [53.8, 182.0], [53.9, 182.0], [54.0, 182.0], [54.1, 182.0], [54.2, 182.0], [54.3, 182.0], [54.4, 183.0], [54.5, 183.0], [54.6, 183.0], [54.7, 183.0], [54.8, 183.0], [54.9, 183.0], [55.0, 183.0], [55.1, 183.0], [55.2, 183.0], [55.3, 183.0], [55.4, 183.0], [55.5, 183.0], [55.6, 183.0], [55.7, 183.0], [55.8, 183.0], [55.9, 183.0], [56.0, 183.0], [56.1, 183.0], [56.2, 183.0], [56.3, 183.0], [56.4, 183.0], [56.5, 184.0], [56.6, 184.0], [56.7, 184.0], [56.8, 184.0], [56.9, 184.0], [57.0, 184.0], [57.1, 184.0], [57.2, 184.0], [57.3, 184.0], [57.4, 184.0], [57.5, 184.0], [57.6, 184.0], [57.7, 184.0], [57.8, 184.0], [57.9, 184.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 184.0], [58.4, 184.0], [58.5, 184.0], [58.6, 184.0], [58.7, 184.0], [58.8, 184.0], [58.9, 184.0], [59.0, 184.0], [59.1, 184.0], [59.2, 185.0], [59.3, 185.0], [59.4, 185.0], [59.5, 185.0], [59.6, 185.0], [59.7, 188.0], [59.8, 188.0], [59.9, 188.0], [60.0, 188.0], [60.1, 188.0], [60.2, 188.0], [60.3, 192.0], [60.4, 192.0], [60.5, 192.0], [60.6, 192.0], [60.7, 192.0], [60.8, 193.0], [60.9, 193.0], [61.0, 193.0], [61.1, 193.0], [61.2, 193.0], [61.3, 193.0], [61.4, 193.0], [61.5, 193.0], [61.6, 193.0], [61.7, 193.0], [61.8, 193.0], [61.9, 194.0], [62.0, 194.0], [62.1, 194.0], [62.2, 194.0], [62.3, 194.0], [62.4, 195.0], [62.5, 195.0], [62.6, 195.0], [62.7, 195.0], [62.8, 195.0], [62.9, 195.0], [63.0, 195.0], [63.1, 195.0], [63.2, 195.0], [63.3, 195.0], [63.4, 195.0], [63.5, 196.0], [63.6, 196.0], [63.7, 196.0], [63.8, 196.0], [63.9, 196.0], [64.0, 197.0], [64.1, 197.0], [64.2, 197.0], [64.3, 197.0], [64.4, 197.0], [64.5, 197.0], [64.6, 198.0], [64.7, 198.0], [64.8, 198.0], [64.9, 198.0], [65.0, 198.0], [65.1, 199.0], [65.2, 199.0], [65.3, 199.0], [65.4, 199.0], [65.5, 199.0], [65.6, 200.0], [65.7, 200.0], [65.8, 200.0], [65.9, 200.0], [66.0, 200.0], [66.1, 200.0], [66.2, 200.0], [66.3, 200.0], [66.4, 200.0], [66.5, 200.0], [66.6, 200.0], [66.7, 200.0], [66.8, 200.0], [66.9, 200.0], [67.0, 200.0], [67.1, 200.0], [67.2, 200.0], [67.3, 204.0], [67.4, 204.0], [67.5, 204.0], [67.6, 204.0], [67.7, 204.0], [67.8, 204.0], [67.9, 204.0], [68.0, 204.0], [68.1, 204.0], [68.2, 204.0], [68.3, 204.0], [68.4, 204.0], [68.5, 204.0], [68.6, 204.0], [68.7, 204.0], [68.8, 204.0], [68.9, 205.0], [69.0, 205.0], [69.1, 205.0], [69.2, 205.0], [69.3, 205.0], [69.4, 207.0], [69.5, 207.0], [69.6, 207.0], [69.7, 207.0], [69.8, 207.0], [69.9, 208.0], [70.0, 208.0], [70.1, 208.0], [70.2, 208.0], [70.3, 208.0], [70.4, 208.0], [70.5, 210.0], [70.6, 210.0], [70.7, 210.0], [70.8, 210.0], [70.9, 210.0], [71.0, 212.0], [71.1, 212.0], [71.2, 212.0], [71.3, 212.0], [71.4, 212.0], [71.5, 212.0], [71.6, 214.0], [71.7, 214.0], [71.8, 214.0], [71.9, 214.0], [72.0, 214.0], [72.1, 215.0], [72.2, 215.0], [72.3, 215.0], [72.4, 215.0], [72.5, 215.0], [72.6, 215.0], [72.7, 215.0], [72.8, 215.0], [72.9, 215.0], [73.0, 215.0], [73.1, 215.0], [73.2, 224.0], [73.3, 224.0], [73.4, 224.0], [73.5, 224.0], [73.6, 224.0], [73.7, 224.0], [73.8, 224.0], [73.9, 224.0], [74.0, 224.0], [74.1, 224.0], [74.2, 225.0], [74.3, 225.0], [74.4, 225.0], [74.5, 225.0], [74.6, 225.0], [74.7, 225.0], [74.8, 226.0], [74.9, 226.0], [75.0, 226.0], [75.1, 226.0], [75.2, 226.0], [75.3, 232.0], [75.4, 232.0], [75.5, 232.0], [75.6, 232.0], [75.7, 232.0], [75.8, 232.0], [75.9, 236.0], [76.0, 236.0], [76.1, 236.0], [76.2, 236.0], [76.3, 236.0], [76.4, 238.0], [76.5, 238.0], [76.6, 238.0], [76.7, 238.0], [76.8, 238.0], [76.9, 241.0], [77.0, 241.0], [77.1, 241.0], [77.2, 241.0], [77.3, 241.0], [77.4, 241.0], [77.5, 241.0], [77.6, 241.0], [77.7, 241.0], [77.8, 241.0], [77.9, 241.0], [78.0, 242.0], [78.1, 242.0], [78.2, 242.0], [78.3, 242.0], [78.4, 242.0], [78.5, 243.0], [78.6, 243.0], [78.7, 243.0], [78.8, 243.0], [78.9, 243.0], [79.0, 243.0], [79.1, 243.0], [79.2, 243.0], [79.3, 243.0], [79.4, 243.0], [79.5, 243.0], [79.6, 247.0], [79.7, 247.0], [79.8, 247.0], [79.9, 247.0], [80.0, 247.0], [80.1, 247.0], [80.2, 258.0], [80.3, 258.0], [80.4, 258.0], [80.5, 258.0], [80.6, 258.0], [80.7, 264.0], [80.8, 264.0], [80.9, 264.0], [81.0, 264.0], [81.1, 264.0], [81.2, 275.0], [81.3, 275.0], [81.4, 275.0], [81.5, 275.0], [81.6, 275.0], [81.7, 275.0], [81.8, 323.0], [81.9, 323.0], [82.0, 323.0], [82.1, 323.0], [82.2, 323.0], [82.3, 351.0], [82.4, 351.0], [82.5, 351.0], [82.6, 351.0], [82.7, 351.0], [82.8, 355.0], [82.9, 355.0], [83.0, 355.0], [83.1, 355.0], [83.2, 355.0], [83.3, 355.0], [83.4, 356.0], [83.5, 356.0], [83.6, 356.0], [83.7, 356.0], [83.8, 356.0], [83.9, 357.0], [84.0, 357.0], [84.1, 357.0], [84.2, 357.0], [84.3, 357.0], [84.4, 357.0], [84.5, 362.0], [84.6, 362.0], [84.7, 362.0], [84.8, 362.0], [84.9, 362.0], [85.0, 362.0], [85.1, 362.0], [85.2, 362.0], [85.3, 362.0], [85.4, 362.0], [85.5, 363.0], [85.6, 363.0], [85.7, 363.0], [85.8, 363.0], [85.9, 363.0], [86.0, 363.0], [86.1, 374.0], [86.2, 374.0], [86.3, 374.0], [86.4, 374.0], [86.5, 374.0], [86.6, 384.0], [86.7, 384.0], [86.8, 384.0], [86.9, 384.0], [87.0, 384.0], [87.1, 392.0], [87.2, 392.0], [87.3, 392.0], [87.4, 392.0], [87.5, 392.0], [87.6, 392.0], [87.7, 410.0], [87.8, 410.0], [87.9, 410.0], [88.0, 410.0], [88.1, 410.0], [88.2, 424.0], [88.3, 424.0], [88.4, 424.0], [88.5, 424.0], [88.6, 424.0], [88.7, 424.0], [88.8, 430.0], [88.9, 430.0], [89.0, 430.0], [89.1, 430.0], [89.2, 430.0], [89.3, 431.0], [89.4, 431.0], [89.5, 431.0], [89.6, 431.0], [89.7, 431.0], [89.8, 434.0], [89.9, 434.0], [90.0, 434.0], [90.1, 434.0], [90.2, 434.0], [90.3, 434.0], [90.4, 440.0], [90.5, 440.0], [90.6, 440.0], [90.7, 440.0], [90.8, 440.0], [90.9, 442.0], [91.0, 442.0], [91.1, 442.0], [91.2, 442.0], [91.3, 442.0], [91.4, 442.0], [91.5, 442.0], [91.6, 442.0], [91.7, 442.0], [91.8, 442.0], [91.9, 442.0], [92.0, 468.0], [92.1, 468.0], [92.2, 468.0], [92.3, 468.0], [92.4, 468.0], [92.5, 471.0], [92.6, 471.0], [92.7, 471.0], [92.8, 471.0], [92.9, 471.0], [93.0, 471.0], [93.1, 474.0], [93.2, 474.0], [93.3, 474.0], [93.4, 474.0], [93.5, 474.0], [93.6, 486.0], [93.7, 486.0], [93.8, 486.0], [93.9, 486.0], [94.0, 486.0], [94.1, 491.0], [94.2, 491.0], [94.3, 491.0], [94.4, 491.0], [94.5, 491.0], [94.6, 491.0], [94.7, 510.0], [94.8, 510.0], [94.9, 510.0], [95.0, 510.0], [95.1, 510.0], [95.2, 515.0], [95.3, 515.0], [95.4, 515.0], [95.5, 515.0], [95.6, 515.0], [95.7, 519.0], [95.8, 519.0], [95.9, 519.0], [96.0, 519.0], [96.1, 519.0], [96.2, 519.0], [96.3, 528.0], [96.4, 528.0], [96.5, 528.0], [96.6, 528.0], [96.7, 528.0], [96.8, 562.0], [96.9, 562.0], [97.0, 562.0], [97.1, 562.0], [97.2, 562.0], [97.3, 562.0], [97.4, 575.0], [97.5, 575.0], [97.6, 575.0], [97.7, 575.0], [97.8, 575.0], [97.9, 604.0], [98.0, 604.0], [98.1, 604.0], [98.2, 604.0], [98.3, 604.0], [98.4, 612.0], [98.5, 612.0], [98.6, 612.0], [98.7, 612.0], [98.8, 612.0], [98.9, 612.0], [99.0, 612.0], [99.1, 612.0], [99.2, 612.0], [99.3, 612.0], [99.4, 612.0], [99.5, 918.0], [99.6, 918.0], [99.7, 918.0], [99.8, 918.0], [99.9, 918.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 122.0, "series": [{"data": [[600.0, 3.0], [300.0, 11.0], [100.0, 122.0], [200.0, 30.0], [400.0, 13.0], [900.0, 1.0], [500.0, 6.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 165.0, "series": [{"data": [[0.0, 165.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 10.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 11.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.73566578E12, "maxY": 1.0, "series": [{"data": [[1.73566692E12, 1.0], [1.73566662E12, 1.0], [1.73566752E12, 1.0], [1.73566722E12, 1.0], [1.73566764E12, 1.0], [1.73566734E12, 1.0], [1.73566632E12, 1.0], [1.73566602E12, 1.0], [1.73566644E12, 1.0], [1.73566614E12, 1.0], [1.73566704E12, 1.0], [1.73566674E12, 1.0], [1.73566716E12, 1.0], [1.73566584E12, 1.0], [1.73566686E12, 1.0], [1.73566746E12, 1.0], [1.73566596E12, 1.0], [1.73566758E12, 1.0], [1.73566656E12, 1.0], [1.73566626E12, 1.0], [1.73566668E12, 1.0], [1.73566638E12, 1.0], [1.73566728E12, 1.0], [1.73566698E12, 1.0], [1.73566578E12, 1.0], [1.7356674E12, 1.0], [1.7356671E12, 1.0], [1.73566608E12, 1.0], [1.7356677E12, 1.0], [1.7356662E12, 1.0], [1.7356659E12, 1.0], [1.7356668E12, 1.0], [1.7356665E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7356677E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 227.0376344086021, "minX": 1.0, "maxY": 227.0376344086021, "series": [{"data": [[1.0, 227.0376344086021]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 227.0376344086021]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 18.166666666666668, "minX": 1.73566578E12, "maxY": 135.98333333333332, "series": [{"data": [[1.73566692E12, 133.91666666666666], [1.73566662E12, 133.91666666666666], [1.73566752E12, 133.91666666666666], [1.73566722E12, 133.91666666666666], [1.73566764E12, 133.91666666666666], [1.73566734E12, 133.91666666666666], [1.73566632E12, 133.91666666666666], [1.73566602E12, 133.91666666666666], [1.73566644E12, 134.66666666666666], [1.73566614E12, 111.91666666666667], [1.73566704E12, 134.66666666666666], [1.73566674E12, 133.91666666666666], [1.73566716E12, 135.23333333333332], [1.73566584E12, 135.41666666666666], [1.73566686E12, 134.66666666666666], [1.73566746E12, 111.91666666666667], [1.73566596E12, 133.91666666666666], [1.73566758E12, 133.91666666666666], [1.73566656E12, 133.91666666666666], [1.73566626E12, 133.91666666666666], [1.73566668E12, 133.91666666666666], [1.73566638E12, 133.91666666666666], [1.73566728E12, 135.98333333333332], [1.73566698E12, 110.0], [1.73566578E12, 67.91666666666667], [1.7356674E12, 133.91666666666666], [1.7356671E12, 133.91666666666666], [1.73566608E12, 135.23333333333332], [1.7356677E12, 22.0], [1.7356662E12, 135.23333333333332], [1.7356659E12, 134.66666666666666], [1.7356668E12, 133.91666666666666], [1.7356665E12, 111.91666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73566692E12, 112.15], [1.73566662E12, 110.0], [1.73566752E12, 111.08333333333333], [1.73566722E12, 109.78333333333333], [1.73566764E12, 110.36666666666666], [1.73566734E12, 111.1], [1.73566632E12, 111.45], [1.73566602E12, 111.76666666666667], [1.73566644E12, 109.95], [1.73566614E12, 91.43333333333334], [1.73566704E12, 112.08333333333333], [1.73566674E12, 111.13333333333334], [1.73566716E12, 112.93333333333334], [1.73566584E12, 108.8], [1.73566686E12, 110.36666666666666], [1.73566746E12, 92.05], [1.73566596E12, 109.9], [1.73566758E12, 108.66666666666667], [1.73566656E12, 110.4], [1.73566626E12, 110.65], [1.73566668E12, 109.51666666666667], [1.73566638E12, 110.21666666666667], [1.73566728E12, 111.66666666666667], [1.73566698E12, 92.58333333333333], [1.73566578E12, 54.38333333333333], [1.7356674E12, 109.96666666666667], [1.7356671E12, 111.91666666666667], [1.73566608E12, 112.46666666666667], [1.7356677E12, 18.166666666666668], [1.7356662E12, 112.85], [1.7356659E12, 110.28333333333333], [1.7356668E12, 110.26666666666667], [1.7356665E12, 91.28333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7356677E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 178.0, "minX": 1.73566578E12, "maxY": 399.2, "series": [{"data": [[1.73566692E12, 217.83333333333334], [1.73566662E12, 198.83333333333334], [1.73566752E12, 241.16666666666669], [1.73566722E12, 190.0], [1.73566764E12, 228.66666666666669], [1.73566734E12, 207.16666666666669], [1.73566632E12, 245.33333333333331], [1.73566602E12, 202.66666666666666], [1.73566644E12, 228.16666666666666], [1.73566614E12, 399.2], [1.73566704E12, 234.0], [1.73566674E12, 199.66666666666666], [1.73566716E12, 214.5], [1.73566584E12, 242.5], [1.73566686E12, 196.0], [1.73566746E12, 201.8], [1.73566596E12, 193.83333333333334], [1.73566758E12, 234.0], [1.73566656E12, 215.16666666666666], [1.73566626E12, 324.83333333333337], [1.73566668E12, 198.16666666666669], [1.73566638E12, 224.16666666666666], [1.73566728E12, 221.16666666666666], [1.73566698E12, 178.0], [1.73566578E12, 297.6666666666667], [1.7356674E12, 235.66666666666666], [1.7356671E12, 212.83333333333334], [1.73566608E12, 222.66666666666669], [1.7356677E12, 188.0], [1.7356662E12, 259.5], [1.7356659E12, 215.5], [1.7356668E12, 225.5], [1.7356665E12, 215.2]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7356677E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 177.8, "minX": 1.73566578E12, "maxY": 399.2, "series": [{"data": [[1.73566692E12, 217.83333333333334], [1.73566662E12, 198.83333333333334], [1.73566752E12, 241.16666666666669], [1.73566722E12, 190.0], [1.73566764E12, 228.66666666666669], [1.73566734E12, 207.0], [1.73566632E12, 245.16666666666666], [1.73566602E12, 202.66666666666666], [1.73566644E12, 228.16666666666666], [1.73566614E12, 399.2], [1.73566704E12, 234.0], [1.73566674E12, 199.66666666666666], [1.73566716E12, 214.5], [1.73566584E12, 242.33333333333334], [1.73566686E12, 196.0], [1.73566746E12, 201.8], [1.73566596E12, 193.83333333333334], [1.73566758E12, 234.0], [1.73566656E12, 215.16666666666666], [1.73566626E12, 324.83333333333337], [1.73566668E12, 198.0], [1.73566638E12, 224.16666666666666], [1.73566728E12, 221.16666666666666], [1.73566698E12, 177.8], [1.73566578E12, 297.6666666666667], [1.7356674E12, 235.66666666666666], [1.7356671E12, 212.83333333333334], [1.73566608E12, 222.66666666666669], [1.7356677E12, 188.0], [1.7356662E12, 259.5], [1.7356659E12, 215.5], [1.7356668E12, 225.5], [1.7356665E12, 215.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7356677E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.73566578E12, "maxY": 125.66666666666666, "series": [{"data": [[1.73566692E12, 38.666666666666664], [1.73566662E12, 33.833333333333336], [1.73566752E12, 40.0], [1.73566722E12, 40.0], [1.73566764E12, 32.5], [1.73566734E12, 31.166666666666664], [1.73566632E12, 46.666666666666664], [1.73566602E12, 33.0], [1.73566644E12, 57.33333333333333], [1.73566614E12, 57.6], [1.73566704E12, 34.16666666666667], [1.73566674E12, 32.833333333333336], [1.73566716E12, 34.16666666666667], [1.73566584E12, 33.666666666666664], [1.73566686E12, 29.0], [1.73566746E12, 40.599999999999994], [1.73566596E12, 37.66666666666667], [1.73566758E12, 43.333333333333336], [1.73566656E12, 45.833333333333336], [1.73566626E12, 44.166666666666664], [1.73566668E12, 37.0], [1.73566638E12, 36.833333333333336], [1.73566728E12, 40.16666666666667], [1.73566698E12, 0.0], [1.73566578E12, 125.66666666666666], [1.7356674E12, 35.5], [1.7356671E12, 39.5], [1.73566608E12, 44.83333333333333], [1.7356677E12, 0.0], [1.7356662E12, 54.333333333333336], [1.7356659E12, 33.0], [1.7356668E12, 36.833333333333336], [1.7356665E12, 34.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7356677E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 120.0, "minX": 1.73566578E12, "maxY": 918.0, "series": [{"data": [[1.73566692E12, 442.0], [1.73566662E12, 374.0], [1.73566752E12, 528.0], [1.73566722E12, 362.0], [1.73566764E12, 515.0], [1.73566734E12, 357.0], [1.73566632E12, 471.0], [1.73566602E12, 384.0], [1.73566644E12, 510.0], [1.73566614E12, 918.0], [1.73566704E12, 442.0], [1.73566674E12, 430.0], [1.73566716E12, 440.0], [1.73566584E12, 468.0], [1.73566686E12, 238.0], [1.73566746E12, 355.0], [1.73566596E12, 356.0], [1.73566758E12, 562.0], [1.73566656E12, 491.0], [1.73566626E12, 612.0], [1.73566668E12, 410.0], [1.73566638E12, 519.0], [1.73566728E12, 486.0], [1.73566698E12, 204.0], [1.73566578E12, 612.0], [1.7356674E12, 431.0], [1.7356671E12, 392.0], [1.73566608E12, 424.0], [1.7356677E12, 188.0], [1.7356662E12, 604.0], [1.7356659E12, 434.0], [1.7356668E12, 362.0], [1.7356665E12, 363.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73566692E12, 145.0], [1.73566662E12, 126.0], [1.73566752E12, 157.0], [1.73566722E12, 131.0], [1.73566764E12, 125.0], [1.73566734E12, 125.0], [1.73566632E12, 145.0], [1.73566602E12, 146.0], [1.73566644E12, 139.0], [1.73566614E12, 149.0], [1.73566704E12, 133.0], [1.73566674E12, 136.0], [1.73566716E12, 141.0], [1.73566584E12, 177.0], [1.73566686E12, 137.0], [1.73566746E12, 134.0], [1.73566596E12, 142.0], [1.73566758E12, 136.0], [1.73566656E12, 124.0], [1.73566626E12, 148.0], [1.73566668E12, 131.0], [1.73566638E12, 140.0], [1.73566728E12, 159.0], [1.73566698E12, 149.0], [1.73566578E12, 138.0], [1.7356674E12, 131.0], [1.7356671E12, 137.0], [1.73566608E12, 174.0], [1.7356677E12, 188.0], [1.7356662E12, 163.0], [1.7356659E12, 120.0], [1.7356668E12, 163.0], [1.7356665E12, 149.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73566692E12, 442.0], [1.73566662E12, 374.0], [1.73566752E12, 528.0], [1.73566722E12, 362.0], [1.73566764E12, 515.0], [1.73566734E12, 357.0], [1.73566632E12, 471.0], [1.73566602E12, 384.0], [1.73566644E12, 510.0], [1.73566614E12, 918.0], [1.73566704E12, 442.0], [1.73566674E12, 430.0], [1.73566716E12, 440.0], [1.73566584E12, 468.0], [1.73566686E12, 238.0], [1.73566746E12, 355.0], [1.73566596E12, 356.0], [1.73566758E12, 562.0], [1.73566656E12, 491.0], [1.73566626E12, 612.0], [1.73566668E12, 410.0], [1.73566638E12, 519.0], [1.73566728E12, 486.0], [1.73566698E12, 204.0], [1.73566578E12, 612.0], [1.7356674E12, 431.0], [1.7356671E12, 392.0], [1.73566608E12, 424.0], [1.7356677E12, 188.0], [1.7356662E12, 604.0], [1.7356659E12, 434.0], [1.7356668E12, 362.0], [1.7356665E12, 363.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73566692E12, 442.0], [1.73566662E12, 374.0], [1.73566752E12, 528.0], [1.73566722E12, 362.0], [1.73566764E12, 515.0], [1.73566734E12, 357.0], [1.73566632E12, 471.0], [1.73566602E12, 384.0], [1.73566644E12, 510.0], [1.73566614E12, 918.0], [1.73566704E12, 442.0], [1.73566674E12, 430.0], [1.73566716E12, 440.0], [1.73566584E12, 468.0], [1.73566686E12, 238.0], [1.73566746E12, 355.0], [1.73566596E12, 356.0], [1.73566758E12, 562.0], [1.73566656E12, 491.0], [1.73566626E12, 612.0], [1.73566668E12, 410.0], [1.73566638E12, 519.0], [1.73566728E12, 486.0], [1.73566698E12, 204.0], [1.73566578E12, 612.0], [1.7356674E12, 431.0], [1.7356671E12, 392.0], [1.73566608E12, 424.0], [1.7356677E12, 188.0], [1.7356662E12, 604.0], [1.7356659E12, 434.0], [1.7356668E12, 362.0], [1.7356665E12, 363.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73566692E12, 178.5], [1.73566662E12, 167.5], [1.73566752E12, 191.5], [1.73566722E12, 160.0], [1.73566764E12, 174.0], [1.73566734E12, 179.5], [1.73566632E12, 172.5], [1.73566602E12, 173.5], [1.73566644E12, 154.0], [1.73566614E12, 198.0], [1.73566704E12, 205.0], [1.73566674E12, 157.0], [1.73566716E12, 162.0], [1.73566584E12, 203.0], [1.73566686E12, 164.0], [1.73566746E12, 169.0], [1.73566596E12, 164.5], [1.73566758E12, 170.5], [1.73566656E12, 169.5], [1.73566626E12, 258.0], [1.73566668E12, 165.0], [1.73566638E12, 171.0], [1.73566728E12, 178.5], [1.73566698E12, 192.0], [1.73566578E12, 143.0], [1.7356674E12, 206.5], [1.7356671E12, 171.0], [1.73566608E12, 207.0], [1.7356677E12, 188.0], [1.7356662E12, 232.0], [1.7356659E12, 194.0], [1.7356668E12, 205.0], [1.7356665E12, 172.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73566692E12, 442.0], [1.73566662E12, 374.0], [1.73566752E12, 528.0], [1.73566722E12, 362.0], [1.73566764E12, 515.0], [1.73566734E12, 357.0], [1.73566632E12, 471.0], [1.73566602E12, 384.0], [1.73566644E12, 510.0], [1.73566614E12, 918.0], [1.73566704E12, 442.0], [1.73566674E12, 430.0], [1.73566716E12, 440.0], [1.73566584E12, 468.0], [1.73566686E12, 238.0], [1.73566746E12, 355.0], [1.73566596E12, 356.0], [1.73566758E12, 562.0], [1.73566656E12, 491.0], [1.73566626E12, 612.0], [1.73566668E12, 410.0], [1.73566638E12, 519.0], [1.73566728E12, 486.0], [1.73566698E12, 204.0], [1.73566578E12, 612.0], [1.7356674E12, 431.0], [1.7356671E12, 392.0], [1.73566608E12, 424.0], [1.7356677E12, 188.0], [1.7356662E12, 604.0], [1.7356659E12, 434.0], [1.7356668E12, 362.0], [1.7356665E12, 363.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7356677E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 177.0, "minX": 1.0, "maxY": 179.0, "series": [{"data": [[1.0, 177.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 179.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 177.0, "minX": 1.0, "maxY": 179.0, "series": [{"data": [[1.0, 177.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 179.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73566578E12, "maxY": 0.1, "series": [{"data": [[1.73566692E12, 0.1], [1.73566662E12, 0.1], [1.73566752E12, 0.1], [1.73566722E12, 0.1], [1.73566764E12, 0.1], [1.73566734E12, 0.1], [1.73566632E12, 0.1], [1.73566602E12, 0.1], [1.73566644E12, 0.1], [1.73566614E12, 0.08333333333333333], [1.73566704E12, 0.1], [1.73566674E12, 0.1], [1.73566716E12, 0.1], [1.73566584E12, 0.1], [1.73566686E12, 0.1], [1.73566746E12, 0.08333333333333333], [1.73566596E12, 0.1], [1.73566758E12, 0.1], [1.73566656E12, 0.1], [1.73566626E12, 0.1], [1.73566668E12, 0.1], [1.73566638E12, 0.1], [1.73566728E12, 0.1], [1.73566698E12, 0.08333333333333333], [1.73566578E12, 0.05], [1.7356674E12, 0.1], [1.7356671E12, 0.1], [1.73566608E12, 0.1], [1.7356677E12, 0.016666666666666666], [1.7356662E12, 0.1], [1.7356659E12, 0.1], [1.7356668E12, 0.1], [1.7356665E12, 0.08333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7356677E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73566578E12, "maxY": 0.1, "series": [{"data": [[1.73566692E12, 0.1], [1.73566662E12, 0.1], [1.73566752E12, 0.1], [1.73566722E12, 0.1], [1.73566764E12, 0.1], [1.73566734E12, 0.1], [1.73566632E12, 0.1], [1.73566602E12, 0.1], [1.73566644E12, 0.1], [1.73566614E12, 0.08333333333333333], [1.73566704E12, 0.1], [1.73566674E12, 0.1], [1.73566716E12, 0.08333333333333333], [1.73566584E12, 0.1], [1.73566686E12, 0.1], [1.73566746E12, 0.08333333333333333], [1.73566596E12, 0.1], [1.73566758E12, 0.1], [1.73566656E12, 0.1], [1.73566626E12, 0.1], [1.73566668E12, 0.1], [1.73566638E12, 0.1], [1.73566728E12, 0.08333333333333333], [1.73566698E12, 0.08333333333333333], [1.73566578E12, 0.05], [1.7356674E12, 0.1], [1.7356671E12, 0.1], [1.73566608E12, 0.08333333333333333], [1.7356677E12, 0.016666666666666666], [1.7356662E12, 0.08333333333333333], [1.7356659E12, 0.1], [1.7356668E12, 0.1], [1.7356665E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.73566608E12, 0.016666666666666666], [1.73566716E12, 0.016666666666666666], [1.7356662E12, 0.016666666666666666], [1.73566728E12, 0.016666666666666666]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7356677E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73566578E12, "maxY": 0.1, "series": [{"data": [[1.73566692E12, 0.1], [1.73566662E12, 0.1], [1.73566752E12, 0.1], [1.73566722E12, 0.1], [1.73566764E12, 0.1], [1.73566734E12, 0.1], [1.73566632E12, 0.1], [1.73566602E12, 0.1], [1.73566644E12, 0.08333333333333333], [1.73566614E12, 0.08333333333333333], [1.73566704E12, 0.08333333333333333], [1.73566674E12, 0.1], [1.73566716E12, 0.08333333333333333], [1.73566584E12, 0.06666666666666667], [1.73566686E12, 0.08333333333333333], [1.73566746E12, 0.08333333333333333], [1.73566596E12, 0.1], [1.73566758E12, 0.1], [1.73566656E12, 0.1], [1.73566626E12, 0.1], [1.73566668E12, 0.1], [1.73566638E12, 0.1], [1.73566728E12, 0.06666666666666667], [1.73566698E12, 0.08333333333333333], [1.73566578E12, 0.05], [1.7356674E12, 0.1], [1.7356671E12, 0.1], [1.73566608E12, 0.08333333333333333], [1.7356677E12, 0.016666666666666666], [1.7356662E12, 0.08333333333333333], [1.7356659E12, 0.08333333333333333], [1.7356668E12, 0.1], [1.7356665E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.73566644E12, 0.016666666666666666], [1.73566704E12, 0.016666666666666666], [1.73566608E12, 0.016666666666666666], [1.73566716E12, 0.016666666666666666], [1.7356662E12, 0.016666666666666666], [1.73566584E12, 0.03333333333333333], [1.73566686E12, 0.016666666666666666], [1.7356659E12, 0.016666666666666666], [1.73566728E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7356677E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73566578E12, "maxY": 0.1, "series": [{"data": [[1.73566692E12, 0.1], [1.73566662E12, 0.1], [1.73566752E12, 0.1], [1.73566722E12, 0.1], [1.73566764E12, 0.1], [1.73566734E12, 0.1], [1.73566632E12, 0.1], [1.73566602E12, 0.1], [1.73566644E12, 0.08333333333333333], [1.73566614E12, 0.08333333333333333], [1.73566704E12, 0.08333333333333333], [1.73566674E12, 0.1], [1.73566716E12, 0.08333333333333333], [1.73566584E12, 0.06666666666666667], [1.73566686E12, 0.08333333333333333], [1.73566746E12, 0.08333333333333333], [1.73566596E12, 0.1], [1.73566758E12, 0.1], [1.73566656E12, 0.1], [1.73566626E12, 0.1], [1.73566668E12, 0.1], [1.73566638E12, 0.1], [1.73566728E12, 0.06666666666666667], [1.73566698E12, 0.08333333333333333], [1.73566578E12, 0.05], [1.7356674E12, 0.1], [1.7356671E12, 0.1], [1.73566608E12, 0.08333333333333333], [1.7356677E12, 0.016666666666666666], [1.7356662E12, 0.08333333333333333], [1.7356659E12, 0.08333333333333333], [1.7356668E12, 0.1], [1.7356665E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.73566644E12, 0.016666666666666666], [1.73566704E12, 0.016666666666666666], [1.73566608E12, 0.016666666666666666], [1.73566716E12, 0.016666666666666666], [1.7356662E12, 0.016666666666666666], [1.73566584E12, 0.03333333333333333], [1.73566686E12, 0.016666666666666666], [1.7356659E12, 0.016666666666666666], [1.73566728E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7356677E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

