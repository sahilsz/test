import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import { Appliances } from './appliances';
import { fetchDayAnalytics } from './api/device';
import Commands from './commands';

export function DeviceDetails({ room, sno, connectedDevices }) {
  const [showAppliances, setShowAppliances] = useState(false);
  const [totalAppliances, setTotalAppliances] = useState(0);
  const [connectedAppliances, setConnectedAppliances] = useState(0);
  const [appliancesAnalysisData, setAppliancesAnalysisData] = useState([]);
  const [appliances, setAppliances] = useState();
  const [onAppliances, setOnAppliances] = useState(0);

  console.log('[APPLIANCES DATA]', appliances);
  function calculateAppliances() {
    let connectedAppliances = 0;
    let totalAppliances = 0;
    const appliancesData = {};
    let onDevices = 0;

    // for (const devices of room?.devices) {
    // loop in rooms
    for (const device of room?.devices) {
      if (!appliancesData[device?.deviceId]) {
        appliancesData[device?.deviceId] = [];
      }
      // loop in device for switches
      for (const s of device?.switches) {
        console.log('DEVICETYPE -', s.deviceType, s);
        // If switch type is N/A
        if (Number(s.deviceType) === 7) {
          continue;
        }
        totalAppliances += 1;

        if (s?.switchState !== '0') {
          onDevices += 1;
        }

        // Connected Devices
        if (connectedDevices.some((d) => d?.deviceId === device?.deviceId)) {
          connectedAppliances += 1;
        }
        // console.log('device?.deviceId', device?.deviceId);
        appliancesData[device?.deviceId].push({
          deviceId: device?.deviceId,
          switchName: s?.switchName,
          switchState: s?.switchState,
          switchId: s?.switchId,
          deviceType: s?.deviceType,
        });
      }
    }

    setConnectedAppliances(connectedAppliances);
    setTotalAppliances(totalAppliances);
    setAppliances(appliancesData);
    setOnAppliances(onDevices);
  }

  const fetchDeviceAnalytics = async (deviceId: string) => {
    const date = new Date().setHours(0, 0, 0, 0);
    const response = await fetchDayAnalytics({
      deviceId,
      day: new Date(date).toISOString(),
    });

    return response?.final;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const devicePromises = room?.devices?.map((device) =>
          fetchDeviceAnalytics(device?.deviceId),
        );

        const deviceData = await Promise.all(devicePromises);
        setAppliancesAnalysisData(deviceData);
      } catch (error) {}
    };

    fetchData();
  }, []);
  useEffect(() => {
    calculateAppliances();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 border-b border-gray-300 rounded-lg bg-white">
        {/* Row 1 */}
        <div className="col-span-1 p-4 flex items-center justify-center">
          {String(sno).padStart(2, '0')}
        </div>

        <div className="col-span-2 p-4 flex items-center justify-cente text-left">
          {room?.roomName}
        </div>

        <div className="col-span-2 p-4 flex items-center justify-center">
          <span className="text-xl font-bold">{connectedAppliances}/</span>
          <span className="text-sm">{totalAppliances}</span>
        </div>

        {/* Commands */}
        <Commands analysisData={appliancesAnalysisData} />

        <div className="col-span-1 p-4 flex items-center justify-center">
          <span className="text-xl font-bold">{onAppliances}/</span>
          <span className="text-sm">{totalAppliances}</span>
        </div>

        <div className="col-span-2 p-4 flex items-center justify-center">
          <Button
            onClick={() => {
              setShowAppliances(!showAppliances);
            }}
          >
            View Details
          </Button>
        </div>
      </div>
      {showAppliances && (
        <Appliances
          appliances={appliances}
          analysisData={appliancesAnalysisData}
          connectedDevices={connectedDevices}
        />
      )}
    </div>
  );
}
