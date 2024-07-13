import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { KeyRotationModal } from "@/components/KeyRotationModal";
import { AccessLogs } from "@/components/AccessLogs";
import { getCurrentKeys, rotateKeys } from "@/lib/keyManagement";

const KeyManagement = () => {
  const [currentKeys, setCurrentKeys] = useState(getCurrentKeys());
  const [isRotationModalOpen, setIsRotationModalOpen] = useState(false);
  const { toast } = useToast();

  const handleRotateKeys = async () => {
    try {
      const newKeys = await rotateKeys();
      setCurrentKeys(newKeys);
      toast({
        title: "Keys rotated successfully",
        description: "New keys are now in effect.",
      });
    } catch (error) {
      toast({
        title: "Error rotating keys",
        description: error.message,
        variant: "destructive",
      });
    }
    setIsRotationModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Key Management Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Keys</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Asymmetric Key ID: {currentKeys.asymmetricKeyId}</p>
            <p>Last Rotated: {currentKeys.lastRotated}</p>
            <Button
              onClick={() => setIsRotationModalOpen(true)}
              className="mt-4"
            >
              Rotate Keys
            </Button>
          </CardContent>
        </Card>
        <AccessLogs />
      </div>
      <KeyRotationModal
        isOpen={isRotationModalOpen}
        onClose={() => setIsRotationModalOpen(false)}
        onConfirm={handleRotateKeys}
      />
    </div>
  );
};

export default KeyManagement;