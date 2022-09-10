<?php

namespace App\Http\Middleware;

use App\Models\SettingTimeline;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        // informasi timeline
        $tl = SettingTimeline::get();
        $user = Auth::user();
        if ($user) {
            $permissions = $user->getAllPermissions()->pluck('name');
            $roles = $user->roles()->pluck('name');
            if ($roles[0] != 'admin' && $user->student) {
                $role_name = $user->student->nick_name;
            } else if ($roles[0] == 'admin') {
                $role_name = 'Admin';
            } else {
                $role_name = 'Member';
            }
        } else {
            $permissions = null;
            $roles = null;
            $role_name = null;
        }
        return array_merge(parent::share($request), [
            'flash' => [
                'message' => fn () => $request->session()->get('message'),
                'gagal' => fn () => $request->session()->get('gagal'),
            ],
            'auth.user.permissions' => $permissions,
            'auth.user.roles' => $roles,
            'auth.user.name' => $role_name ? $role_name : 'admin',
            'timelines' => $tl
        ]);
    }
}
