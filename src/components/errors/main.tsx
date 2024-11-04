import { Button } from '../ui/button';

export const MainErrorFallBack = () => {
  return (
    <div className="flex w-screen h-screen items-center justify-center flex-col text-red-500">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
      <Button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </Button>
    </div>
  );
};
