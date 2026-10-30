/**
 * Code Empire — Settings
 *
 * Profile edit, preferences (theme, notifications, sound),
 * clear local data.
 */

import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Switch,
  Modal,
  useToast,
  ThemeChanger,
} from "dara-ui";
import { useProfile, useProgress } from "@/contexts";
import { preferencesStore, resetAll } from "@/lib/storage";
import { dashboard, switchLabels, themeChanger } from "@/content/dashboard";
import { common, form } from "@/content/common";
import { Icons } from "@/lib/icons";

export default function Settings() {
  const toast = useToast();
  const { profile, save } = useProfile();
  const { reset } = useProgress();

  const [name, setName] = useState(profile?.name ?? "");
  const [bio, setBio] = useState(profile?.bio ?? "");
  const [saving, setSaving] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(false);

  const handleSaveProfile = async () => {
    if (!name.trim()) return;
    setSaving(true);
    try {
      await save({ name: name.trim(), bio: bio.trim() });
      await preferencesStore.set({ notifications, sound });
      toast.success(common.success);
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    await Promise.all([reset(), resetAll()]);
    setConfirmOpen(false);
    toast.success(common.success);
    setName("");
    setBio("");
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-heading text-2xl font-bold text-[var(--color-text-primary)]">
        {dashboard.settings}
      </h1>

      <Card glow="primary">
        <h2 className="font-heading font-bold text-sm mb-3 flex items-center gap-2">
          <Icons.user className="h-4 w-4 text-[var(--color-primary)]" />
          {dashboard.profile}
        </h2>
        <div className="flex flex-col gap-3">
          <Input
            label={dashboard.profileName}
            placeholder={form.required}
            value={name}
            onChange={(e) => setName(e.target.value)}
            leftIcon={<Icons.user className="h-4 w-4" />}
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text-secondary)]">
              {dashboard.profileBio}
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full font-sans rounded-[14px] px-4 py-3 text-base outline-none transition-all bg-[var(--color-bg-tertiary)] border border-[var(--color-border-primary)] focus:border-[var(--color-primary)] focus:bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] resize-y"
              dir="auto"
            />
          </div>
          <Button
            variant="primary"
            size="sm"
            loading={saving}
            disabled={!name.trim()}
            onClick={handleSaveProfile}
            leftIcon={<Icons.check className="h-3.5 w-3.5" />}
          >
            {dashboard.saveProfile}
          </Button>
        </div>
      </Card>

      <Card glow="secondary">
        <h2 className="font-heading font-bold text-sm mb-3 flex items-center gap-2">
          <Icons.settings className="h-4 w-4 text-[var(--color-secondary)]" />
          {dashboard.settings}
        </h2>
        <div className="flex flex-col gap-4">
          <Switch
            label={switchLabels.notifications}
            defaultChecked={notifications}
            onCheckedChange={setNotifications}
            glow
          />
          <Switch
            label={switchLabels.sound}
            defaultChecked={sound}
            onCheckedChange={setSound}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-[var(--color-text-tertiary)] font-mono">
                {themeChanger.title}
              </label>
              <ThemeChanger />
            </div>
          </div>
        </div>
      </Card>

      <Card variant="outline" className="border-[var(--color-danger)]/30">
        <h2 className="font-heading font-bold text-sm mb-3 flex items-center gap-2 text-[var(--color-danger)]">
          <Icons.trash className="h-4 w-4" />
          {dashboard.clearData}
        </h2>
        <p className="text-xs text-[var(--color-text-secondary)] mb-4 leading-relaxed">
          {dashboard.clearDataWarning}
        </p>
        <Button
          variant="danger"
          size="sm"
          leftIcon={<Icons.trash className="h-3.5 w-3.5" />}
          onClick={() => setConfirmOpen(true)}
        >
          {dashboard.clearData}
        </Button>
      </Card>

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title={dashboard.clearData}
        confirmText={common.confirm}
        cancelText={common.cancel}
        onConfirm={handleReset}
      >
        <p>{dashboard.clearDataWarning}</p>
      </Modal>
    </div>
  );
}
